var jackImg,pathImg,path,jack,right_boundry,left_boundry,subway,subwayImg;
function preload(){

jackImg=loadAnimation("Runner-1.png","Runner-2.png")
pathImg=loadImage("path.png")
}

function setup(){
createcanvas(400,400);
path=createsprite(200,2090);
path.addImage(pathImg);
path.velocityY=5;
path.y=path.hight/30;
jack=createsprite(180,340,50,170);
jack.addAnimation(jackImg)
left_boundry=createsprite(0,300,100,600);
right_boundry=createsprite(390,300,80,600)
left_boundry.visible=false
right_boundry.visible=false
}

function draw(){
background(0);
path.velocityY=5;
jack.X=World.mouseX
if(path.y>400)
path.y=hight/2

}
{
jack.collide(left_boundry);
jack.collide(right_boundry);
edges=createEdgeSprites()
jack.collide(edges[3])
drawsprites()
}
