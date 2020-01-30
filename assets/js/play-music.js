function __(id) {
        return document.getElementById(id);
}
    
var cancion = __('player-music');
var titulo = __('title-music');
var next = __('next-music');

cancion.src = 'assets/audios/1.mp3';
cancion.autoplay = true;
cancion.controls = true;

__('audio1').onclick = function () {
    cancion.src = 'assets/audios/1.mp3'
    titulo.innerText = __('title1').outerText;    
}
    
__('audio2').onclick = function () {
    cancion.src = 'assets/audios/2.mp3'
    titulo.innerText = __('title2').outerText;
}

__('audio3').onclick = function () {
    cancion.src = 'assets/audios/3.mp3'
    titulo.innerText = __('title3').outerText;
}

__('audio4').onclick = function () {
    cancion.src = 'assets/audios/4.mp3'
    titulo.innerText = __('title4').outerText;
}

__('audio5').onclick = function () {
    cancion.src = 'assets/audios/5.mp3'
    titulo.innerText = __('title5').outerText;
}

__('audio6').onclick = function () {
    cancion.src = 'assets/audios/6.mp3'
    titulo.innerText = __('title6').outerText;
}

__('audio7').onclick = function () {
    cancion.src = 'assets/audios/7.mp3'
    titulo.innerText = __('title7').outerText;
}

