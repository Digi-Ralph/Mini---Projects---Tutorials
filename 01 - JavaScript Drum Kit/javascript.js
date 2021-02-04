

window.addEventListener('keydown' , function(e) {
    const keys = document.querySelector(`[data-key = "${e.keyCode}"]`);
    keys.classList.add('playing');
    const audio = document.querySelector(`audio[data-key ="${e.keyCode}"]`)
    audio.currentTime = 0 // reset Time of playback back to 0 
    audio.play(); // Play Audio 
    
})

window.addEventListener('keyup' , function(e) {
    const remove = document.querySelector(`[data-key = "${e.keyCode}"]`)
    remove.classList.remove('playing')
})












