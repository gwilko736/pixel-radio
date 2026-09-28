# pixel-radio

A Pixel radio art widget/player that plays a set playlist of local Mp3 files. 

## Features

- Pixel-art radio animation
- Play and pause controls
- Next and previous track controls
- Automatic playlist looping
- Scrolling track title and artist display
- Electron desktop support
- Folder selection and remembering
- Automatic MP3 discovery

## Controls

- Power button (top): turn the radio on or off
- Play button (right knob): play or pause the current track
- Left side of the track button (left knob): previous track
- Right side of the track button (left knob): next track
- Right Click: Opens a menu with 'Change Music Folder', volume controls, and an option to close the app

## Running the desktop app
No installer is available yet.

You need Node.js installed.

From the project folder, install the dependencies and start the app:

```powershell
npm.cmd install
npm.cmd start
```

## How it works

The radio artwork is a sprite sheet. JavaScript changes the visible frame by updating CSS variables.

The radio uses a small state machine:

- `off`
- `standby`
- `music`

Electron scans the chosen folder and the webpage plays the returned tracks.

On launch the app prompts for a music folder, remembers the choice, and scans MP3s directly inside that folder. User-selected MP3s get their title from the filename and show “Unknown artist.” If a folder isn't selected a Stock Audio playlist will play instead. You can change the music folder in the right-click menu. 

## Credits

### Artwork

Created by: Grace Wilkinson

### Audio
Stock Audio is included and will play when no file is selected.

[LoFi Compilation](https://opengameart.org/content/lofi-compilation) by [TAD]([https://opengameart.org/users/tad), All tracks are licensed under [CC0](http://creativecommons.org/publicdomain/zero/1.0/)
- A cup of tea.mp3
- Cue.mp3
- Bartender.mp3
- Cat caffe.mp3
- ChillLofiR.mp3
- Rainy Forest.mp3
- Countryside.mp3
- Oceanside.mp3
- Florist.mp3
- Morning rain.mp3

### Font

Pixelify Sans by [Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans)

## Future plans
- Windows Installer
- Transparent & draggable background
- Improve track metadata handling
- Explore integration with Windows Media Player

## Licence

### Source Code:
The source code for this project is licensed under the MIT License.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the source code, subject to the terms of the MIT License.

See the LICENSE file for the full licence text.

### Artwork & Visual Assets:
All original artwork, graphics, skins, icons, logos, and other visual assets created by me and included in this project remain my intellectual property.

Copyright © 2026 Grace Wilkinson Narratives. All rights reserved.

These assets are not included under the MIT License. Permission to use, copy, modify, distribute, or commercially exploit these assets is not granted unless explicitly stated otherwise.


### Audio:
The audio files included with this project are provided under the Creative Commons Zero (CC0) 1.0 Universal dedication, where indicated.

### Future Commercial Versions:
This project may be developed into separate commercial applications, including desktop versions and additional skins or visual assets. Such versions and assets may be distributed under separate proprietary licences and/or End User Licence Agreements (EULAs).