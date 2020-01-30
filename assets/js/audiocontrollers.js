function __(id) {
    return document.getElementById(id);
}

var audio1 = __('player-music'),
    PP = __('playpause'),
    volume = __('volume'),
    time = __('time'),
    volumeicon = __('volume-icon');

audio1.autoplay = true;
audio1.controls = true;


audio1.volume = .5;
volume.value = .5;

/*
    CREAR ICONO MUTE :)
__('mute').onclick = function () {
    if(audio1.muted = true){
        alert('HHH');
        //volumeicon.innerHTML = '<i class="icon-sound-mute"></i>'
    }
}*/
//Pausar y reproducir
PP.onclick = function() {
    if (audio1.paused) {
        audio1.play();
        PP.innerHTML = '<span class="icon-controller icon-controller-paus"></span>';
    } else {
        audio1.pause();
        PP.innerHTML = '<span class="icon-controller icon-controller-play"></span>';
    }
};

audio1.onplaying = function() {
    PP.innerHTML = '<span class="icon-controller icon-controller-paus"></span>';
};

audio1.onended = function() {
    PP.innerHTML = '<span class="icon-controller icon-controller-play"></span>';
}

//volumem
volume.onchange = function(e) {
    audio1.volume = e.target.value;
}

//tiempo
audio1.ontimeupdate = function() {
    time.max = audio1.duration;
    time.value = audio1.currentTime;
}

//mostrar Nombre en el logo
function mostrarNombre() {
    __('nombre').style = 'display: inline-block';
};