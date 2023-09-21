window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${(e.key).toUpperCase()}"]`)
    console.log(audio)
});