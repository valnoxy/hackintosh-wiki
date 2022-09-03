---
sidebar_position: 1
title: Preperation
---

## Create the install media
First of all, you will need the install media of macOS. I will use macrecovery to download and create the macOS Install media.

With macrecovery, the process is the following:
1. Download [OpenCorePkg](https://github.com/acidanthera/OpenCorePkg) as a ZIP.
2. Extract the OpenCorePkg-master.zip file.
3. Open ```cmd.exe``` with Administrator privileges and change the directory to OpenCorePkg-master\Utilities\macrecovery.
   Enter one the following commands to download macOS:

```bash
# Catalina (10.15)
python macrecovery.py -b Mac-00BE6ED71E35EB86 -m 00000000000000000 download

# Big Sur (11)
python macrecovery.py -b Mac-42FD25EABCABB274 -m 00000000000000000 download

# Monterey (12)
python macrecovery.py -b Mac-E43C1C25D4880AD6 -m 00000000000000000 download
```

4. After the download succeeded, type ```diskpart``` and wait until you see ```DISKPART>```
5. Plug-in your pendrive and type ```list disk``` to see your disk id.
6. Select your pendrive by typing ```select disk <diskid>```
7. Now we are gonna clean the pendrive and convert it to GPT. First, type ```clean``` and then ```convert gpt```.
>  **Note**: If an error occurred, try to convert again by typing ```convert gpt```.
8. After the pendrive is clean and converted, we will create a new partition where we can put our files on. First, type ```create partition primary```, then select the new partition with ```select partition 1``` and format it ```format fs=fat32 quick```.
9. Finally, mount your pendrive by typing ```assign```
10. Now, close the Command Prompt and create the folder ```com.apple.recovery.boot``` on the pendrive. Copy ```OpenCorePkg-master\Utilities\macrecovery\BaseSystem.dmg``` and ```Basesystem.chunklist``` into that folder.
>  **Note**: If you can't find BaseSystem.dmg, use RecoveryImage.dmg and RecoveryImage.chunklist instead.

After the install media was created, we need to make the USB drive bootable.

### Configure and install OpenCore
Download the EFI folder from the repo, you will find the latest files under the release tab or just download the repo as it is. Move the folder to the root of your pendrive (e.g. J:\\) and rename the folder to ```EFI```.

[**Lenovo ThinkPad T440p - EFI Files »**](https://github.com/valnoxy/t440p-oc/releases)

[**Lenovo ThinkPad T480 - EFI Files »**](https://github.com/valnoxy/t480-oc/releases)

#### Generate SMBIOS
We need a script, called [GenSMBIOS](https://github.com/corpnewt/GenSMBIOS), to create fake serial number, UUID and MLB numbers. **This step is essential to have working iMessage, so do not skip it!**

The process is the following:

1. Download GenSMBIOS as a ZIP, then extract it.
2. Start GenSMBIOS.bat and use option 1 to download MacSerial.
3. Choose option 2, to select the path of the config.plist file. It will be located in EFI -> OC folder.
4. Choose option 3, and enter ```MacBookPro15,2``` as the machine type.
5. Press Q to quit. Your config now should contain the requied serials.

#### Proper ROM value
After adding serials to your config.plist, you have to add the computer's MAC address to the config.plist file. **This step is also essential to have a working iMessage, so do not skip it.**

We need a Plist editior, to write the MAC address into the config.plist file. I used [ProperTree](https://github.com/corpnewt/ProperTree), since it works on Windows too. You have to change the MAC address value in the config.plist at ```PlatformInfo -> Generic -> ROM```.

Delete the generic ```112233445566``` value, and enter your MAC address into the field, without any colons. Save the Plist file, and it is now ready to be written out to the EFI partition of your install media.

#### Default keyboard layout and language
The default keyboard layout and language is ```German```. To change the language, edit the value of ```NVRAM -> Add -> 7C436110-AB2A-4BBB-A880-FE41995C9F82 -> prev-lang:kbd``` to the value of your language. If your value contains an underscore ```_```, replace it with a hyphen ```-```. The value for English would be ```en-US:0```. You can find a list of all language values [here](https://github.com/acidanthera/OpenCorePkg/blob/master/Utilities/AppleKeyboardLayouts/AppleKeyboardLayouts.txt).
