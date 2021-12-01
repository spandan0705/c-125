noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550, 500);
    canvas=createCanvas(500, 500);
    canvas.position(560, 150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses); 
}

function draw()
{
    background(51, 204, 128);
    document.getElementById("sq_sides").innerHTML="Width & Height of a Square will be = "+difference+"px";
    fill('#ec1349');
    stroke('#4000ff');
    square(noseX, noseY, difference);
}

function modelLoaded()
{
    console.log('PoseNet is initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x = "+ noseX + "nose y = "+ noseY);


        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        difference=floor(leftWristX - rightWristX);
        console.log("left wrist X = "+ leftWristX+ "right Wrist X = "+ rightWristX +"difference = "+difference);
    }
}