# Android Instagram SSL Pinning Bypass

**📆 Update:** As of **March 29, 2026**, the JavaScript files for bypassing SSL pinning in Instagram Android APK v422 have been successfully tested and are available here free of charge 🧪

![Instagram Android SSL Pinning Bypass](https://i.imgur.com/ujkdtCw.jpeg) 
---

## Requirements ✅
- **Rooted Android Emulator** (e.g., Nox Player with root mode enabled) 📱  
- **Frida** installed on your computer 🖥️  
- Matching **frida-server** binary running inside the emulator (same version as host Frida)  
- Instagram **APK** (v395 - v422) installed in the emulator  

---

## Matching APK versions for scripts 📱
- Download correct APK version for v395 [[v395](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-399-0-0-51-85-release/instagram-399-0-0-51-85-5-android-apk-download/)]
- Download correct APK version for v396 [[v396](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-396-0-0-46-242-release/instagram-396-0-0-46-242-3-android-apk-download/)]
- Download correct APK version for v397 [[v397](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-397-1-0-52-81-release/instagram-397-1-0-52-81-8-android-apk-download/)]
- Download correct APK version for v398 [[v398](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-398-1-0-53-77-release/instagram-398-1-0-53-77-7-android-apk-download/)]
- Download correct APK version for v399 [[v399](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-399-0-0-51-85-release/instagram-399-0-0-51-85-5-android-apk-download/)]
- Download correct APK version for v409 [[v409](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-409-0-0-48-170-release/instagram-409-0-0-48-170-2-android-apk-download/)]
- Download correct APK version for v422 [[v422](https://www.apkmirror.com/apk/instagram/instagram-instagram/instagram-422-0-0-44-64-release/instagram-422-0-0-44-64-7-android-apk-download/)]
---

## Quick Start 🚀

### Option 1 — Run directly from CodeShare
```bash
frida -U -f com.instagram.android --codeshare takaotr/instagram-ssl-pinning-bypass-v398 --no-pause
```
> Replace `v398` with your desired version to test.

---

### Option 2 — Run using a local script
```bat
set "SCRIPT=C:\Users\PCName\Desktop\TheScriptThatYouDownloaded.js"
"%LOCALAPPDATA%\Packages\PythonSoftwareFoundation.Python.3.12_qbz5n2kfra8p0\LocalCache\local-packages\Python312\Scripts\frida.exe" -U -f com.instagram.android -l "%SCRIPT%"
```
> Here, `frida.exe` is called with its **full path** (important on Windows when installed via Microsoft Store Python, since it may not be on PATH).

---

## CodeShare Links 🔗
- v395 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v395/  
- v396 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v396/
- v397 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v397/
- v398 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v398/
- v399 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v399/
- v409 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v409/
- v422 → https://codeshare.frida.re/@takaotr/instagram-ssl-pinning-bypass-v422/
  
---


## Support ☕💸
If this project helped you and you’d like to support:  
- **USDT (TRC20):** `TEk4Bc85gTtExoUPPNXvhJkGyqhUSsSPVr`

---

> ⚠️ **Legal Notice:** **For educational and research purposes only.** Use only on apps/devices you **own** or are **explicitly authorized** to test. Respect all applicable laws and Terms of Service.
