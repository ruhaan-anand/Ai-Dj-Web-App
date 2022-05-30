var scroreLeftWrist = 0;
var leftWristX = 0;
var leftWristY =0;

function preload(){
    song = loadSound("music.mp3")
}

function setup(){
    canvas = createCanvas(600, 400)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()

    classifier = ml5.poseNet(video, modelLoaded)
    classifier.on('pose', gotPoses)
   
}

function modelLoaded(){
    console.log("Model is Loaded")
}

function draw(){
    image(video, 0, 0, 640, 480)

    // if(scroreLeftWrist == 0.2){
        circle(leftWristX, leftWristY, 20)
        lWY_div_500 = floor(leftWristX/500)
        document.getElementById("volume-h3").inerHTML = lWY_div_500
        song.setVolume(lWY_div_500)

    // }
}
function playSong(){
    song.play()
}

function gotPoses(error, results){
    if(error){
        console.log(error)
    }else{
        console.log(results)
         scroreLeftWrist = results[0].pose.keypoints[9].score
         leftWristX = results[0].pose.leftWrist.x
         leftWristY = results[0].pose.leftWrist.y
    }
}