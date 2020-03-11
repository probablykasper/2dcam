# 2dCam

## Installation
Refer to `2dCam.pdf`

## Usage
Refer to `2dCam.pdf`

## Dev instructions

### Setup
1. Install Adobe After Effects
2. Install Adobe ExtendScript Toolkit for debugging. For me, the official `dmg` installer would not work, so I downloaded using from [this link](http://prdl-download.adobe.com/ExtendScriptToolkit/85C17E5FC8B34A7B8483796F0367F97C/1509443413689/AdobeExtendScriptToolkit_4_LS22.dmg) that I found on [a forum post](https://community.adobe.com/t5/get-started/how-can-i-download-extendscript-toolkit-for-cs6-in-the-creative-cloud/td-p/4564136), and then the installer itself was broken so I had to right click > Show Package Contents, then open `Contents/MacOS/Install` with the the termianl.

### Workflow
The ExtendScript Toolkit app freezes constantly for me, so I developed using VSCode and ran it using the `Run script file...` menu item in After Effects. Then, whenever there was an error, I would jump into ExtendScript Toolkit to for it's error messages, logs, data browser etc.

I also went into `Preferences... > Documents` and turned on `Automatic Reload of Changed Files` so that the changes I make in VSCode show up automatically in ExtendScript Toolkit.

### Useful resources
- [After Effects Scripting Guide](https://blogs.adobe.com/wp-content/blogs.dir/48/files/2012/06/After-Effects-CS6-Scripting-Guide.pdf?file=2012/06/After-Effects-CS6-Scripting-Guide.pdf)
- [JavaScript Tools Guide](https://www.adobe.com/content/dam/acom/en/devnet/scripting/estk/javascript_tools_guide.pdf)
- [Match names PDF](https://www.provideocoalition.com/aftereffects-plugin-match-names/)
- Run the `log_selected_match_names.jsx` script to log every match name of the selected layers.
- Run the `get_image_binary.jsx` script to get the binary of a PNG or JPG, for inlining in scripts.
