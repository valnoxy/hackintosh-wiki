---
sidebar_position: 3
title: Post-Installation
---

### 💾 Install OpenCore to Hard drive
1. Press `ALT + SPACE` and open terminal. Type `sudo diskutil mountDisk disk0s1` (where disk0s1 corresponds to the EFI partition of the main disk)
2. Open Finder and copy the EFI folder of your USB device to the main disk's EFI partition.
3. Unplug the USB device and reboot your laptop. Now you can boot macOS without your USB device.

### 🎧 Fix Audio Jack noice
This is only necessary for the Lenovo ThinkPad T440p.

1. Copy `ALCPlugFix` to your desktop.
2. Press `WIN + SPACE` and open terminal. Type the following commands: 
```bash
sudo spctl --master-disable
sudo mkdir /usr/local/bin/
cd Desktop/ALCPlugFix
./install.sh
```
3. After that, type `hda-verb 0x1a SET_PIN_WIDGET_CONTROL 0x24`.

### ✏️ Create a offline install media (Optional)
In case of reinstalling macOS, a offline install media can save some time. You also don't need an Ethernet connection for the installation.
To create a offline install media, you need the following stuff: 

- macOS Installer from the App Store.
- A 16 GB pendrive (Keep in mind, during the preperation we will format the disk to create the install media).

Press `ALT + SPACE` and open Disk utility. Select your USB device and click erase. Name it `MyUSB` and choose **Mac OS Extended** with **GUID Partition Map**. After erasing the USB device, close Disk utility.

Now press `ALT + SPACE` and open terminal. Type the following command:

Big Sur:
```sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyUSB --downloadassets```

Monterey:
```sudo /Applications/Install\ macOS\ Monterey.app/Contents/Resources/createinstallmedia --volume /Volumes/MyUSB --downloadassets```

After creating the install media, copy your EFI folder to the EFI partition of your USB device.
