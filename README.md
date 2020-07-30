# TeleFrame addon: ImageReminder

This is an addon for the [TeleFrame](https://github.com/LukeSkywalker92/TeleFrame).

## Description

It sends out a friendly reminder in case there have been no new photos sent for the last two weeks. 

## Installation

Clone the imageReminder-folder into your Teleframe-addon-folder:

```sh
cd ~/TeleFrame/addons
git clone https://github.com/call-me-matt/teleframe-imageReminder.git imageReminder
```

Use the addon_control script to enable or disable the addon:

```sh
# enable addon
~/TeleFrame/tools/addon_control.sh enable imageReminder

# disable addon
~/TeleFrame/tools/addon_control.sh disable imageReminder
```

Then restart TeleFrame.

