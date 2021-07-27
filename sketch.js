
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	bgImage=loadImage("images/BG.jpg")
	chipsImage=loadImage("images/chips.png");
	deckImage=loadImage("images/deckf.png");
	blueImage=loadImage("images/blueC.png");
	
	
	twoCimage  =loadImage("normalCards/2C.png");
	twoDimage  =loadImage("normalCards/2D.png");
    twoHimage  =loadImage("normalCards/2H.png");
	twoSimage  =loadImage("normalCards/2S.png");
	threeCimage=loadImage("normalCards/3C.png");
	threeDimage=loadImage("normalCards/3D.png");
	threeHimage=loadImage("normalCards/3H.png");
	threeSimage =loadImage("normalCards/3S.png");
	fourCimage =loadImage("normalCards/4C.png");
	fourDimage =loadImage("normalCards/4D.png");
	fourHimage =loadImage("normalCards/4H.png");
    fourSimage =loadImage("normalCards/4S.png");
	fiveCimage =loadImage("normalCards/5C.png");
	fiveDimage =loadImage("normalCards/5D.png");
    fiveHimage =loadImage("normalCards/5H.png");
	fiveSimage =loadImage("normalCards/5S.png");
	sixCimage  =loadImage("normalCards/6C.png");
	sixDimage  =loadImage("normalCards/6D.png");
    sixHimage  =loadImage("normalCards/6H.png");
	sixSimage  =loadImage("normalCards/6S.png");
	sevenCimage=loadImage("normalCards/7C.png");
	sevenDimage=loadImage("normalCards/7D.png");
    sevenHimage=loadImage("normalCards/7H.png");
	sevenSimage=loadImage("normalCards/7S.png");
	eightCimage=loadImage("normalCards/8C.png");
	eightDimage=loadImage("normalCards/8D.png");
    eightHimage=loadImage("normalCards/8H.png");
	eightSimage=loadImage("normalCards/8S.png");
    nineCimage =loadImage("normalCards/9C.png");
	ninetDimage=loadImage("normalCards/9D.png");
    ninetHimage=loadImage("normalCards/9H.png");
	nineSimage =loadImage("normalCards/9S.png");
	tenthCimage=loadImage("normalCards/10C.png");
	tenthDimage=loadImage("normalCards/10D.png");
    tenthHimage=loadImage("normalCards/10H.png");
	tenthSimage=loadImage("normalCards/10S.png");
	aceCimage  =loadImage("normalCards/AC.png");
	aceDimage  =loadImage("normalCards/AD.png");
    aceHimage  =loadImage("normalCards/AH.png");
	aceSimage  =loadImage("normalCards/AS.png");
	jackCimage =loadImage("normalCards/JC.png");
	jackDimage =loadImage("normalCards/JD.png");
    jackHimage =loadImage("normalCards/JH.png");
	jackSimage =loadImage("normalCards/JS.png");
    queenCimage =loadImage("normalCards/QC.png");
	queenDimage=loadImage("normalCards/QD.png");
    queenHimage=loadImage("normalCards/QH.png");
	queenSimage=loadImage("normalCards/QS.png");
	kingCimage =loadImage("normalCards/KC.png");
    kingDimage =loadImage("normalCards/KD.png");
    kingHimage =loadImage("normalCards/KH.png");
    kingSimage =loadImage("normalCards/KS.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight);
   
	block11=createSprite(130,100,70,50)

	block12=createSprite(210,100,70,50)
	block12.addImage(tenthCimage)
	block12.scale=0.075
	block13=createSprite(290,100,70,50)
	block13.addImage(nineCimage)
	block13.scale=0.075
	block14=createSprite(370,100,70,50)
	block14.addImage(eightCimage)
	block14.scale=0.075
	block15=createSprite(450,100,70,50)
	block15.addImage(sevenCimage)
	block15.scale=0.075
	block16=createSprite(530,100,70,50)
	block16.addImage(sevenDimage)
	block16.scale=0.075
	block17=createSprite(610,100,70,50)
	block17.addImage(eightDimage)
	block17.scale=0.075
	block18=createSprite(690,100,70,50)
	block18.addImage(ninetDimage)
	block18.scale=0.075
	block19=createSprite(770,100,70,50)
	block19.addImage(tenthDimage)
	block19.scale=0.075
	block110=createSprite(850,100,70,50)

	block21=createSprite(130,160,70,50)
	block21.addImage(tenthHimage)
	block21.scale=0.075
	block22=createSprite(210,160,70,50)
	block22.addImage(queenCimage)
	block22.scale=0.075
	block23=createSprite(290,160,70,50)
	block23.addImage(sixCimage)
	block23.scale=0.075
	block24=createSprite(370,160,70,50)
	block24.addImage(fiveCimage)
	block24.scale=0.075
	block25=createSprite(450,160,70,50)
	block25.addImage(fourCimage)
	block25.scale=0.075
	block26=createSprite(530,160,70,50)
	block26.addImage(fourDimage)
	block26.scale=0.075
	block27=createSprite(610,160,70,50)
	block27.addImage(fiveDimage)
	block27.scale=0.075
	block28=createSprite(690,160,70,50)
	block28.addImage(sixDimage)
	block28.scale=0.075
	block29=createSprite(770,160,70,50)
	block29.addImage(queenSimage)
	block29.scale=0.075
	block210=createSprite(850,160,70,50)
	block210.addImage(tenthSimage)
	block210.scale=0.075

	block31=createSprite(130,220,70,50)
	block31.addImage(ninetHimage)
	block31.scale=0.075
	block32=createSprite(210,220,70,50)
	block32.addImage(sixHimage)
	block32.scale=0.075
	block33=createSprite(290,220,70,50)
	block33.addImage(kingCimage)
	block33.scale=0.075
	block34=createSprite(370,220,70,50)
	block34.addImage(threeCimage)
	block34.scale=0.075
	block35=createSprite(450,220,70,50)
	block35.addImage(twoCimage)
	block35.scale=0.075
	block36=createSprite(530,220,70,50)
	block36.addImage(twoDimage)
	block36.scale=0.075
	block37=createSprite(610,220,70,50)
	block37.addImage(threeDimage)
	block37.scale=0.075
	block38=createSprite(690,220,70,50)
	block38.addImage(kingSimage)
	block38.scale=0.075
	block39=createSprite(770,220,70,50)
	block39.addImage(sixSimage)
	block39.scale=0.075
	block310=createSprite(850,220,70,50)
	block310.addImage(nineSimage)
	block310.scale=0.075
	
	block41=createSprite(130,280,70,50)
	block41.addImage(eightHimage)
	block41.scale=0.075
	block42=createSprite(210,280,70,50)
	block42.addImage(fiveHimage)
	block42.scale=0.075
	block43=createSprite(290,280,70,50)
	block43.addImage(threeHimage)
	block43.scale=0.075
	block44=createSprite(370,280,70,50)
	block44.addImage(queenHimage)
	block44.scale=0.075
	block45=createSprite(450,280,70,50)
	block45.addImage(aceCimage)
	block45.scale=0.075
	block46=createSprite(530,280,70,50)
	block46.addImage(aceDimage)
	block46.scale=0.075
	block47=createSprite(610,280,70,50)
	block47.addImage(queenDimage)
	block47.scale=0.075
	block48=createSprite(690,280,70,50)
	block48.addImage(threeSimage)
	block48.scale=0.075
	block49=createSprite(770,280,70,50)
	block49.addImage(fiveSimage)
	block49.scale=0.075
	block410=createSprite(850,280,70,50)
	block410.addImage(eightSimage)
	block410.scale=0.075

	block51=createSprite(130,340,70,50)
	block51.addImage(sevenHimage)
	block51.scale=0.075
	block52=createSprite(210,340,70,50)
	block52.addImage(fourHimage)
	block52.scale=0.075
	block53=createSprite(290,340,70,50)
	block53.addImage(twoHimage)
	block53.scale=0.075
	block54=createSprite(370,340,70,50)
	block54.addImage(aceHimage)
	block54.scale=0.075
	block55=createSprite(450,340,70,50)
	block55.addImage(kingHimage)
	block55.scale=0.075
	block56=createSprite(530,340,70,50)
	block56.addImage(kingDimage)
	block56.scale=0.075
	block57=createSprite(610,340,70,50)
	block57.addImage(aceSimage)
	block57.scale=0.075
	block58=createSprite(690,340,70,50)
	block58.addImage(twoSimage)
	block58.scale=0.075
	block59=createSprite(770,340,70,50)
	block59.addImage(fourSimage)
	block59.scale=0.075
	block510=createSprite(850,340,70,50)
	block510.addImage(sevenSimage)
	block510.scale=0.075
	
	block61=createSprite(130,400,70,50)
	block61.addImage(sevenSimage)
	block61.scale=0.075
	block62=createSprite(210,400,70,50)
	block62.addImage(fourSimage)
	block62.scale=0.075
	block63=createSprite(290,400,70,50)
	block63.addImage(twoSimage)
	block63.scale=0.075
	block64=createSprite(370,400,70,50)
	block64.addImage(aceSimage)
	block64.scale=0.075
	block65=createSprite(450,400,70,50)
	block65.addImage(kingSimage)
	block65.scale=0.075
	block66=createSprite(530,400,70,50)
	block66.addImage(kingCimage)
	block66.scale=0.075
	block67=createSprite(610,400,70,50)
	block67.addImage(aceHimage)
	block67.scale=0.075
	block68=createSprite(690,400,70,50)
	block68.addImage(twoHimage)
	block68.scale=0.075
	block69=createSprite(770,400,70,50)
	block69.addImage(fourHimage)
	block69.scale=0.075
	block610=createSprite(850,400,70,50)
	block610.addImage(sevenHimage)
	block610.scale=0.075

	block71=createSprite(130,460,70,50)
	block71.addImage(eightSimage)
	block71.scale=0.075
	block72=createSprite(210,460,70,50)
	block72.addImage(fiveSimage)
	block72.scale=0.075
	block73=createSprite(290,460,70,50)
	block73.addImage(threeSimage)
	block73.scale=0.075
	block74=createSprite(370,460,70,50)
	block74.addImage(queenSimage)
	block74.scale=0.075
	block75=createSprite(450,460,70,50)
	block75.addImage(aceDimage)
	block75.scale=0.075
	block76=createSprite(530,460,70,50)
	block76.addImage(aceCimage)
	block76.scale=0.075
	block77=createSprite(610,460,70,50)
	block77.addImage(queenCimage)
	block77.scale=0.075
	block78=createSprite(690,460,70,50)
	block78.addImage(threeHimage)
	block78.scale=0.075
	block79=createSprite(770,460,70,50)
	block79.addImage(fiveHimage)
	block79.scale=0.075
	block710=createSprite(850,460,70,50)
	block710.addImage(eightHimage)
	block710.scale=0.075

	block81=createSprite(130,520,70,50)
	block81.addImage(nineSimage)
	block81.scale=0.075
	block82=createSprite(210,520,70,50)
	block82.addImage(sixSimage)
	block82.scale=0.075
	block83=createSprite(290,520,70,50)
	block83.addImage(kingDimage)
	block83.scale=0.075
	block84=createSprite(370,520,70,50)
	block84.addImage(threeDimage)
	block84.scale=0.075
	block85=createSprite(450,520,70,50)
	block85.addImage(twoDimage)
	block85.scale=0.075
	block86=createSprite(530,520,70,50)
	block86.addImage(twoCimage)
	block86.scale=0.075
	block87=createSprite(610,520,70,50)
	block87.addImage(threeCimage)
	block87.scale=0.075
	block88=createSprite(690,520,70,50)
	block88.addImage(kingHimage)
	block88.scale=0.075
	block89=createSprite(770,520,70,50)
	block89.addImage(sixHimage)
	block89.scale=0.075
	block810=createSprite(850,520,70,50)
	block810.addImage(ninetHimage)
	block810.scale=0.075

	block91=createSprite(130,580,70,50)
	block91.addImage(tenthSimage)
	block91.scale=0.075
	block92=createSprite(210,580,70,50)
	block92.addImage(queenDimage)
	block92.scale=0.075
	block93=createSprite(290,580,70,50)
	block93.addImage(sixDimage)
	block93.scale=0.075
	block94=createSprite(370,580,70,50)
	block94.addImage(fiveDimage)
	block94.scale=0.075
	block95=createSprite(450,580,70,50)
	block95.addImage(fourDimage)
	block95.scale=0.075
	block96=createSprite(530,580,70,50)
	block96.addImage(fourCimage)
	block96.scale=0.075
	block97=createSprite(610,580,70,50)
	block97.addImage(fiveCimage)
	block97.scale=0.075
	block98=createSprite(690,580,70,50)
	block98.addImage(sixCimage)
	block98.scale=0.075
	block99=createSprite(770,580,70,50)
	block99.addImage(queenHimage)
	block99.scale=0.075
	block910=createSprite(850,580,70,50)
	block910.addImage(tenthHimage)
	block910.scale=0.075

	block101=createSprite(130,640,70,50)
	block102=createSprite(210,640,70,50)
	block102.addImage(tenthDimage)
	block102.scale=0.075
	block103=createSprite(290,640,70,50)
	block103.addImage(ninetDimage)
	block103.scale=0.075
	block104=createSprite(370,640,70,50)
	block104.addImage(eightDimage)
	block104.scale=0.075
	block105=createSprite(450,640,70,50)
	block105.addImage(sevenDimage)
	block105.scale=0.075
	block106=createSprite(530,640,70,50)
	block106.addImage(sevenCimage)
	block106.scale=0.075
	block107=createSprite(610,640,70,50)
	block107.addImage(eightCimage)
	block107.scale=0.075
	block108=createSprite(690,640,70,50)
	block108.addImage(nineCimage)
	block108.scale=0.075
	block109=createSprite(770,640,70,50)
	block109.addImage(tenthCimage)
	block109.scale=0.075
	block1010=createSprite(850,640,70,50);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  // board = createSprite(200,200)//
   //board.addImage(bgImage)//
    
   deck = createSprite(700,730)
   deck.addImage(deckImage);
   deck.scale=0.5

	Engine.run(engine);  
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  text(mouseX+","+ mouseY,mouseX,mouseY)
  
  drawSprites();
   textSize(18);
  text("Click here to pick a card",450,740);


 
}



