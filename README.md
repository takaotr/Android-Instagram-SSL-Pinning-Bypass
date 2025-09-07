# Android Instagram SSL Pinning Bypass

**📆 Update:** As of **September 7, 2025**, JavaScript files for bypassing SSL pinning in Instagram **Android APK v395** and **v396** have been successfully tested and are shared here free of charge. 🧪

![Instagram Android SSL Pinning Bypass](https://i.imgur.com/phnofUf.jpeg) 
---

## Requirements ✅
- **Rooted Android Emulator** (e.g., Nox Player with root mode enabled) 📱  
- **Frida** installed on your computer 🖥️  
- Matching **frida-server** binary running inside the emulator (same version as host Frida)  
- Instagram **APK** (v395 or v396) installed in the emulator  

---

## Quick Start 🚀

### Option 1 — Run directly from CodeShare
```bash
frida -U -f com.instagram.android --codeshare takaotr/instagram-ssl-pinning-bypass-v396 --no-pause
```
> Replace `v396` with your desired version to test.

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

---


## Support ☕💸
If this project helped you and you’d like to support:  
- **Buy Me a Coffee:** https://buymeacoffee.com/mytk  
- **USDT (TRC20):** `TEk4Bc85gTtExoUPPNXvhJkGyqhUSsSPVr`

---

> ⚠️ **Legal Notice:** **For educational and research purposes only.** Use only on apps/devices you **own** or are **explicitly authorized** to test. Respect all applicable laws and Terms of Service.
