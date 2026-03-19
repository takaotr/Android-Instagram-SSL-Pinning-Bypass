/* UPDATED FOR INSTAGRAM v421
Original base by TAKAO TR */

'use strict'

var isTigonMNSServiceHolderHooked = false;

function hookLibLoading() {
    Java.perform(() => {
        const SoLoader = Java.use("com.facebook.soloader.MergedSoMapping$Invoke_JNI_OnLoad");

        // We hook libappstatelogger2 as a trigger point for Tigon loading
        const targetLib = SoLoader.libappstatelogger2_so || SoLoader.libtigon_so;

        if (targetLib) {
            targetLib.implementation = function() {
                if (!isTigonMNSServiceHolderHooked) {
                    isTigonMNSServiceHolderHooked = true;
                    hookTigonMNSServiceHolder();
                }
                return targetLib.call(this);
            };
        } else {
            // Fallback: If loader hook fails, try immediate hook
            hookTigonMNSServiceHolder();
        }
    });
}

function hookTigonMNSServiceHolder() {
    Java.perform(() => {
        try {
            const Holder = Java.use("com.facebook.tigon.tigonmns.TigonMNSServiceHolder");

            // Hook EVERY overload of initHybrid to be safe for v421
            Holder.initHybrid.overloads.forEach((ol) => {
                ol.implementation = function() {
                    const cfg = arguments[0]; // TigonMNSConfig is always first

                    if (cfg) {
                        const cfgClass = cfg.$className;
                        console.log(`[*][+] Patching Config in initHybrid: ${cfgClass}`);

                        // Disable Cert Verification
                        try {
                            if (cfg.setEnableCertificateVerificationWithProofOfPossession)
                                cfg.setEnableCertificateVerificationWithProofOfPossession(false);
                            if (cfg.setVerifyCertificates)
                                cfg.setVerifyCertificates(false);
                        } catch (e) {}

                        // Enable Sandbox/Proxy Trust
                        try {
                            if (cfg.setTrustSandboxCertificates)
                                cfg.setTrustSandboxCertificates(true);
                        } catch (e) {}
                    }

                    return ol.apply(this, arguments);
                };
            });
            console.log("[*][+] Successfully applied multi-overload hook to Tigon");
        } catch (e) {
            console.log("[*][-] Tigon Hook Error: " + e);
        }
    });
}

// Standard Conscrypt/TrustManager Bypass
Java.perform(function() {
    try {
        const TrustManagerImpl = Java.use('com.android.org.conscrypt.TrustManagerImpl');
        const ArrayList = Java.use("java.util.ArrayList");

        // Hook checkTrustedRecursive
        if (TrustManagerImpl.checkTrustedRecursive) {
            TrustManagerImpl.checkTrustedRecursive.implementation = function(chain, host, flags, a4, a5, a6) {
                console.log(`[*][+] Bypassing TrustManagerImpl for: ${host}`);
                return ArrayList.$new(); // Return empty list to signify trust
            }
        }
    } catch (e) {
        console.log("[*][-] Conscrypt Hook Failed");
    }

    // Generic SSLContext Hook
    try {
        const SSLContext = Java.use("javax.net.ssl.SSLContext");
        SSLContext.init.overload("[Ljavax.net.ssl.KeyManager;", "[Ljavax.net.ssl.TrustManager;", "java.security.SecureRandom").implementation = function(km, tm, sr) {
            console.log("[*][+] Redirecting SSLContext.init to null TrustManager");
            return this.init(km, null, sr);
        };
    } catch (e) {
        console.log("[*][-] SSLContext Hook Failed");
    }
});

hookLibLoading();
