noseX = 0;
noseY = 0;

function preload()
{
 moustache_image = 'https://i.postimg.cc/TP3LH94S/Moustache.jpg'
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();
video = createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function draw()
{
image(video, 0, 0, 300, 300);
image(moustache_image, noseX, noseY, 30, 30);
}

function take_snapshot()
{
    save('myFilterImage.png');
}

function modelLoaded()
{
    console.log("PoseNet is initialized");
}

function gotPoses(results)
{
 if(results.length > 0)
 {
    console.log(results);
     noseX = "nose x = " + results[0].pose.nose.x;
     noseY = "nose y = " + results[0].pose.nose.y;
     console.log("nose x = " + noseX);
     console.log("nose y = " + noseY);
 }
}
