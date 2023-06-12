noseX=0;
noseY=0;
function preload()
{
    clown=loadImage('https://i.postimg.cc/LswHVTd3/clown.png');
}

function setup(){
    canvas= createCanvas(300,300);
    canvas.center();

    cam = createCapture(VIDEO);
    cam.size(300,300);
    cam.hide();

    posen= ml5.poseNet(cam,modelLoaded);
    posen.on('pose',gotPoses);
}

function modelLoaded(){
   console.log("Model loaded");
   
}

function gotPoses(results)
{
    if(results.length >0){
        console.log(results);
        noseX=results[0].pose.nose.x-10;
        noseY=results[0].pose.nose.y-10;
        console.log("nosex = " +noseX);
        console.log("nosey = " +noseY);
    }

}

function draw()
{
    image(cam,0,0,300,300);
    image(clown,noseX,noseY,20,30);
}

function save_pic(){
    save('myimg_png');
}