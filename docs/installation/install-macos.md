---
sidebar_position: 2
title: Install macOS
---

### Prepare BIOS
The bios must be properly configured prior to installing macOS.

<details>
  <summary>Lenovo ThinkPad T440p</summary>
  <div>
    <dl>
        <dt>In Security menu, set the following settings:</dt>
        <dd>-  <b>Security > Security Chip</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Memory Protection > Execution Prevention</b>: must be <b>Enabled</b></dd>
        <dd>-  <b>Internal Device Access > Bottom Cover Tamper Detection</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Anti-Theft > Current Setting</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Anti-Theft > Computrace > Current Setting</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Secure Boot > Secure Boot</b>: must be <b>Disabled</b></dd>
    </dl>
    <dl>    
        <dt>In Startup menu, set the following options:</dt>
        <dd>-  <b>UEFI/Legacy Boot</b>: must be <b>UEFI Only</b></dd>
        <dd>-  <b>CSM Support</b>: must be <b>No</b></dd>
    </dl>
  </div>
</details>

<details>
  <summary>Lenovo ThinkPad T480</summary>
  <div>
    <dl>
        <dt>In Security menu, set the following settings:</dt>
        <dd>-  <b>Security > Security Chip</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Memory Protection > Execution Prevention</b>: must be <b>Enabled</b></dd>
        <dd>-  <b>Virtualization > Intel Virtualization Technology</b>: must be <b>Enabled</b></dd>
        <dd>-  <b>Virtualization > Intel VT-d Feature</b>: must be <b>Enabled</b></dd>
        <dd>-  <b>Anti-Theft > Computrace > Current Setting</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Secure Boot > Secure Boot</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Intel SGX > Intel SGX Control</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Device Guard</b>: must be <b>Disabled</b></dd>
    </dl>
    <dl>    
        <dt>In Startup menu, set the following options:</dt>
        <dd>-  <b>UEFI/Legacy Boot</b>: must be <b>UEFI Only</b></dd>
        <dd>-  <b>CSM Support</b>: must be <b>No</b></dd>
    </dl>
    <dl>
        <dt>In Thunderbolt(TM) 3 menu (Config), set the following options:</dt>
        <dd>-  <b>Thunderbolt BIOS Assist Mode</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Wake by Thunderbolt(TM) 3</b>: must be <b>Disabled</b></dd>
        <dd>-  <b>Security Level</b>: must be <b>No Security</b></dd>
        <dd>-  <b>Support in Pre Boot Environment > Thunderbolt(TM) device</b>: must be <b>Disabled</b></dd>
    </dl>
  </div>
</details>

### Install macOS
1. Boot from USB, press ```SPACE``` and select the USB drive inside of OpenCore ```"NO NAME (DMG)" or similar```.
> **Note:** The first boot may take up to 20 minutes. 
2. Wait for the macOS Utilities screen.
3. Select Disk Utility, select your disk and click erase. Give a name and choose **APFS** with **GUID Partition Map**.
4. After erasing, go back and select **Reinstall macOS** and follow the steps on your screen. The installation make take up to **2 hours**.
>  **Note:** Your PC will restart multiple times. Just boot from USB and select your disk inside of OpenCore. (named macOS Installer or the disk name).
5. Once you see the `Region selection` screen, you are good to proceed.
6. Create your user account and everything else.
