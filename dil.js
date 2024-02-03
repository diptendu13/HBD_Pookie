
const song = document.getElementById('click');

function doMagic() {
    var catOne = document.getElementById('catOne');
    var catTwo = document.getElementById('catTwo');
    if (catOne.classList.contains('deactivate')){
        catTwo.classList.add('deactivate');
        catOne.classList.remove('deactivate');
    }
    else {
        catOne.classList.add('deactivate');
        catTwo.classList.remove('deactivate');
    }


    // confetti_code
    let canvas = document.createElement("canvas");
    let container = document.getElementsByClassName('gift')[0];
    canvas.width = 600;
    canvas.height = 600;
  
    container.appendChild(canvas);
  
    let confetti_button = confetti.create(canvas);
    confetti_button({
        particleCount: 150
    }).then(() => container.removeChild(canvas));


    // music_code
    let music = document.getElementById('myAudio');

    if (music.paused){
        music.play();
    }
    else {
        music.pause();
    }
}

song.addEventListener('click', doMagic);