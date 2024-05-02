// Start sound and start CSS transition
window.addEventListener('touchstart', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

});

// to stop the open hi hat when the user hits close hi hat
function stopAudio(audio) {
    audio.pause()           // pause the audio (because there is no built-in stop function)
    audio.currentTime = 0   // reset the playback position to the beginning
}


// Stop the CSS transition
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition)

    // prevents touch screen defaults like zoom in/out
    key.addEventListener("touchstart", e => {
        e.preventDefault()
    })
});

/////////////////////////////////////////////////////////////////////////////////////////
// For moble touch screen

// touchstart, touchmove, touchend
document.addEventListener("touchstart", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.createElement("div")
        dot.classList.add("dot")
        dot.style.top = `${touch.pageY}px`
        dot.style.left = `${touch.pageX}px`
        dot.id = touch.identifier
        document.body.append(dot)
    })
})

const bass = document.getElementById('bass')
const snare = document.getElementById('snare')
const hiHatOpen = document.getElementById('hi-hat-open')
const hiHatClose = document.getElementById('hi-hat-close')

// Bass Drum
function playBass() {
    const audio = new Audio()
    audio.src = "sounds/bass_drum.wav"
    audio.play()
    bass.classList.add('playing');
}

bass.addEventListener('click', playBass)
bass.addEventListener('touchstart', playBass)
bass.addEventListener(new KeyboardEvent('keypress', { 'key': 'h' }), playBass)

// Snare Drum
function playSnare() {
    const audio = new Audio()
    audio.src = "sounds/snare.wav"
    audio.play()
    snare.classList.add('playing');
}

snare.addEventListener('click', playSnare)
snare.addEventListener('touchstart', playSnare)

// Hi Hats
let hihatAudio

function playOpenHiHat() {
    hihatAudio = new Audio()
    hihatAudio.src = "sounds/hi-hat_open.wav"
    hihatAudio.play()
    hiHatOpen.classList.add('playing');
}

hiHatOpen.addEventListener('click', playOpenHiHat)
hiHatOpen.addEventListener('touchstart', playOpenHiHat)

function playCloseHiHat() {
    const audio = new Audio()
    audio.src = "sounds/hi-hat_close.wav"
    audio.play()
    hiHatClose.classList.add('playing');

    stopAudio(hihatAudio)
}

hiHatClose.addEventListener('click', playCloseHiHat)
hiHatClose.addEventListener('touchstart', playCloseHiHat)







document.addEventListener("touchmove", e => {
    //console.log("Move")
})

document.addEventListener("touchend", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})