let boom = new Audio("sounds/boom.wav");
let clap = new Audio("sounds/clap.wav");
let hihat = new Audio("sounds/hihat.wav");
let kick = new Audio("sounds/kick.wav");
let openhat = new Audio("sounds/openhat.wav");
let ride = new Audio("sounds/ride.wav");
let snare = new Audio("sounds/snare.wav");
let tink = new Audio("sounds/tink.wav");
let tom = new Audio("sounds/tom.wav");

document.addEventListener('keydown', button);

function button (event) {
    if (event.key =="a") {
        boom.currentTime=0;
        boom.play();
    }
    else if (event.key =="s") {
        clap.currentTime=0;
        clap.play();
    }
    else if (event.key =="d") {
        hihat.currentTime=0;
        hihat.play();
    }
    else if (event.key =="f") {
        kick.currentTime=0;
        kick.play();
    }
    else if (event.key =="g") {
        openhat.currentTime=0;
        openhat.play();
    }
    else if (event.key =="h") {
        ride.currentTime=0;
        ride.play();
    }
    else if (event.key =="j") {
        snare.currentTime=0;
        snare.play();
    }
    else if (event.key =="k") {
        tink.currentTime=0;
        tink.play();
    }
    else if (e.key == "L" || e.key =="l") {
        tom.currentTime=0;
        tom.play();
    }
};