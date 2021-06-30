video="";

function setup(){
    video=createCapture(VIDEO);
    video.hide();
    canvas=createCanvas(480,380);
    canvas.center();
}

function start(){
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded!");
}

function draw(){
    image(video,0,0,480,380);
}