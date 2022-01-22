// get all keys
let keys = document.querySelectorAll('.key')


// play notes
function playNotes(event) {
    // get key 
    let audiokeyCode = getKeyCode(event);

    // pressed key
    const key = document.querySelector(`.key[data-key="${audiokeyCode}"]`)


    // key exists

    const isKeyExists = key

    if(!isKeyExists) {
        return;
    }

    playAudio(audiokeyCode)
    addPlaying(key)
}

function addPlaying(key) {
    key.classList.add('playing')
}

function getKeyCode(event) {
    let keyCode;

    const isKeyBoard = event.type === 'keydown'

    if(isKeyBoard) {
    keyCode = event.keyCode

}   else {
    keyCode = event.target.dataset.key
}
    return keyCode;
}

function removePlaying(event) {
    event.target.classList.remove('playing');
}

// play audio 

function playAudio(audiokeyCode) {
    let audio = document.querySelector(`audio[data-key="${audiokeyCode}"]`);
    audio.currentTime = 0;
    audio.play()
}


// keyboard type

window.addEventListener('keydown', playNotes);

function init() {
    keys.forEach(
        function(key) {
            key.addEventListener('click', playNotes);
            key.addEventListener('transitionend', removePlaying);
        }
    
    )
    
    // keyboard type
    
    window.addEventListener('keydown', playNotes);
}

window.addEventListener('load', init);