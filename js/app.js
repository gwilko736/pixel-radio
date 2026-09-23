const radio = document.querySelector("#radio");
const displayText = document.querySelector(".display__text");
const audio = new Audio();
audio.volume = 0.7;

const playlist = [
    {
        title: "A cup of tea",
        artist: "TAD",
        src: "assets/audio/A cup of tea.mp3"
    },
    {
        title: "Bartender",
        artist: "TAD",
        src: "assets/audio/Bartender.mp3"
    },
    {
        title: "Cat caffe",
        artist: "TAD",
        src: "assets/audio/Cat caffe.mp3"
    },
    {    
        title: "ChillLofiR",
        artist: "TAD",
        src: "assets/audio/ChillLofiR.mp3"
    },
    {    
        title: "Countryside",
        artist: "TAD",
        src: "assets/audio/Countryside.mp3"
    },
    {    
        title: "Cue",
        artist: "TAD",
        src: "assets/audio/Cue.mp3"
    },
    {
        title: "Florist",
        artist: "TAD",
        src: "assets/audio/Florist.mp3"
    },
    {
        title: "Morning rain",
        artist: "TAD",
        src: "assets/audio/Morning rain.mp3"        
    },
    {
        title: "Oceanside",
        artist: "TAD",
        src: "assets/audio/Oceanside.mp3"
    },
    {
        title: "Rainy Forest",
        artist: "TAD",
        src: "assets/audio/Rainy Forest.mp3"
    }
];

let trackIndex = 0;

function updateDisplay() {
    const track = playlist[trackIndex];
    displayText.textContent = `${track.title} - ${track.artist}`;
}

function loadTrack() {
    audio.src = playlist[trackIndex].src;
    audio.load();
    updateDisplay();
}

loadTrack();
displayText.textContent = "";

function nextTrack() {
    trackIndex = (trackIndex + 1) % playlist.length;
    loadTrack();

    audio.play().catch((error) => {
        console.error("Could not play next track:", error);
    });
}

function previousTrack() {
    trackIndex =
        (trackIndex - 1 + playlist.length) % playlist.length;

    loadTrack();

    audio.play().catch((error) => {
        console.error("Could not play previous track:", error);
    });
}
audio.addEventListener("ended", () => {
    if (currentState === "music") {
        nextTrack();
    }
    
    });

function showFrame(frameNumber) {
  const frameIndex = frameNumber - 1;
  const column = frameIndex % 3;
  const row = Math.floor(frameIndex / 3);

  radio.style.setProperty("--col", column);
  radio.style.setProperty("--row", row);
};

let timerId = null;

const sequences = {
    off: {
        frames:[1],
        loop: true
    },
    
    standby: {
        frames:[2],
        loop: true
    },

    play: {
        frames:[3],
        loop: false
    },

    music: {
        frames:[8, 9, 10, 11, 12, 13],
        loop: true
    },

    skip: {
        frames:[4, 5],
        loop:false
    },

    prev: {
        frames:[6, 7],
        loop: false
    }
};

function playSequence(name, whenDone) {
    clearInterval(timerId);
    const sequence = sequences[name];
    let frameIndex = 0;

    showFrame(sequence.frames[frameIndex]);

    timerId = setInterval(() => {
        frameIndex += 1;

        if (frameIndex >= sequence.frames.length) {
            if (sequence.loop) {
                frameIndex = 0;
            } else {
                clearInterval(timerId);
                timerId = null;

                if (whenDone) {
                    whenDone();
                }

                return;
            }
        }

        showFrame(sequence.frames[frameIndex]);
    }, 150);
}

let currentState = "off";

function setState(newState) {
    currentState=newState;

    if(newState === "off") {
        audio.pause();
        displayText.textContent = "";
        playSequence("off");
    }
    else if (newState === "standby") {
        audio.pause();
        displayText.textContent = "";
        playSequence("standby");
    }
    else if (newState === "music") {
        updateDisplay();
        playSequence("music");
    }

}

const powerButton = document.querySelector(".hotspot--power");
const playButton = document.querySelector(".hotspot--play");

powerButton.addEventListener("click", () => {
    if (currentState === "off") {
        setState("standby");
    } else {
        setState("off");
    }
});
playButton.addEventListener("click", () => {
    if (currentState === "standby") {
        setState("music");

        audio.play().catch((error) => {
    console.error("Could not play audio:", error);
    console.log("Audio source:", audio.src);
    console.log("Ready state:", audio.readyState);
    console.log("Audio error:", audio.error);
});

        playSequence("play", () => {
            playSequence("music");
        });
    } else if (currentState === "music") {
        setState("standby");
    }
});

const changetrackButton = document.querySelector(".hotspot--change.track");

changetrackButton.addEventListener("click", (event) => {
    if (currentState !== "music") {
        return;
    }

    const midpoint = event.currentTarget.offsetWidth / 2;
if (event.offsetX < midpoint) {
    playSequence("prev", () => {
        previousTrack();
        playSequence("music");
    });
} else {
    playSequence("skip", () => {
        nextTrack();
        playSequence("music");
    });
}
});
