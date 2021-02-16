const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var starImg,fairyImg, bgImg;
var fairy,fairyVoice;
var star,starBody;
var engine,world;




function preload()
{
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);
	engine = Engine.create();
	world = engine.world;

	// fairyVoice.play();

	var star_options={
		isStatic:true
	}
	starBody= Bodies.circle(650 , 30 , 5 ,starBody_options);
	World.add(world,starBody);

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
	World.add(world,star);
	

	fairy = createSprite(130, 520,20,20);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;
	World.add(world,fairy)


	console.log(star)


}


function draw() {

	Engine.update(engine);

    background(bgImg);

  rectMode(CENTER); 
  rect(fairy.position.x,fairy.position.y,20,20);

  rectMode(CENTER); 
  rect(star.position.x,star.position.y,20,20);

  rectMode(CENTER); 
  rect(starBody.position.x,starBody.position.y,20,20);

   keyPressed();


   drawSprites();
   

}

function keyPressed() {

	if(keyDown("left")) {

		fairy.velocityX = -5;
	
	} else{
		fairy.velocityX = 0;
	}
	
	if(keyDown("right")) {
	
		fairy.velocityX = 5;

	}

    if(keyDown("down")) {

		Matter.Body.setStatic(starBody,false);

	
	
	}

}


