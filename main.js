// Start sound and start CSS transition
window.addEventListener('touchstart', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');

});



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


bass.addEventListener('touchstart', e => {
    const audio = new Audio()
    audio.src = "sounds/bass_drum.wav"
    audio.play()
    bass.classList.add('playing');
})

snare.addEventListener('touchstart', e => {
    const audio = new Audio()
    audio.src = "sounds/snare.wav"
    audio.play()
    snare.classList.add('playing');
})

hiHatOpen.addEventListener('touchstart', e => {
    const audio = new Audio()
    audio.src = "sounds/hi-hat_open.wav"
    audio.play()
    hiHatOpen.classList.add('playing');
})

hiHatClose.addEventListener('touchstart', e => {
    const audio = new Audio()
    audio.src = "sounds/hi-hat_close.wav"
    audio.play()
    hiHatClose.classList.add('playing');
})







document.addEventListener("touchmove", e => {
    console.log("Move")
})

document.addEventListener("touchend", e => {
    [...e.changedTouches].forEach(touch => {
        const dot = document.getElementById(touch.identifier)
        dot.remove()
    })
})