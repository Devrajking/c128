song="";
leftWristX=0;
leftWristy=0;
rightWristX=0;
rightWristY=0;
function preload()
{
    song=loadSound("music.mp3");
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function modelLoaded(){
    console.log('poseNet is initialized');
}


function draw(){
    image(video,0,0,600,500);

}
function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWristX;
        leftWristY=results[0].pose.leftWristY;
        console.log("leftWristX="+leftWristX+"leftWristY="+leftWristY);


        rightWristX=results[0].pose.rightWrist.X;
        rightWristY=results[0].pose.rightWrist.Y;
        console.log("rightWristX="+rightWristX+"rightWristY="+rightWristY);
    }
}