# pixel-radio

A Pixel radio art widget/player that plays a set playlist of local Mp3 files. 

## Features

- Pixel-art radio animation
- Play and pause controls
- Next and previous track controls
- Automatic playlist looping
- Scrolling track title and artist display

## Controls

- Power button (top): turn the radio on or off
- Play button (right knob): play or pause the current track
- Left side of the track button (left knob): previous track
- Right side of the track button (left knob): next track

## Running the project

Open `index.html` through a local server, such as VS Code Live Server.

Audio playback works best in Chrome or another full browser. The VS Code integrated browser may restrict local audio playback.

## Audio

The MP3 files are stored in:

`assets/audio/`

The playlist is currently defined in `js/app.js`.

Each track should include:

- Title
- Artist
- File path

## How it works

The radio artwork is a sprite sheet. JavaScript changes the visible frame by updating CSS variables.

The radio uses a small state machine:

- `off`
- `standby`
- `music`

The MP3 player uses the browser Audio API. When a track ends, the next track starts automatically.

## Credits

### Artwork

Created by: Grace Wilkinson

### Audio
LoFi Compilation [https://opengameart.org/content/lofi-compilation] by TAD [https://opengameart.org/users/tad], [http://creativecommons.org/publicdomain/zero/1.0/] 
- A cup of tea.mp3 A cup of tea.mp3 3.4 Mb 
- Cue.mp3 Cue.mp3 3 Mb 
- Bartender.mp3 Bartender.mp3 5.9 Mb 
- Cat caffe.mp3 Cat caffe.mp3 2.7 Mb 
- Rainy Forest.mp3 Rainy Forest.mp3 2.4 Mb 
- Countryside.mp3 Countryside.mp3 2.2 Mb 
- Oceanside.mp3 Oceanside.mp3 2.5 Mb 
- Florist.mp3 Florist.mp3 2.7 Mb 
- Morning rain.mp3 Morning rain.mp3 1.5 Mb 

### Font

Pixelify Sans by [Google Fonts](https://fonts.google.com/specimen/Pixelify+Sans)

## Future plans

- Package the widget as a desktop Electron app
- Automatically scan a local music folder
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