
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

	//hand cards

	twoCimage1  =loadImage("handCards/2C.png");
	twoDimage1  =loadImage("handCards/2D.png");
    twoHimage1  =loadImage("handCards/2H.png");
	twoSimage1  =loadImage("handCards/2S.png");
	threeCimage1=loadImage("handCards/3C.png");
	threeDimage1=loadImage("handCards/3D.png");
	threeHimage1=loadImage("handCards/3H.png");
	threeSimage1 =loadImage("handCards/3S.png");
	fourCimage1 =loadImage("handCards/4C.png");
	fourDimage1 =loadImage("handCards/4D.png");
	fourHimage1 =loadImage("handCards/4H.png");
    fourSimage1 =loadImage("handCards/4S.png");
	fiveCimage1 =loadImage("handCards/5C.png");
	fiveDimage1 =loadImage("handCards/5D.png");
    fiveHimage1 =loadImage("handCards/5H.png");
	fiveSimage1 =loadImage("handCards/5S.png");
	sixCimage1 =loadImage("handCards/6C.png");
	sixDimage1 =loadImage("handCards/6D.png");
    sixHimage1  =loadImage("handCards/6H.png");
	sixSimage1 =loadImage("handCards/6S.png");
	sevenCimage1=loadImage("handCards/7C.png");
	sevenDimage1=loadImage("handCards/7D.png");
    sevenHimage1=loadImage("handCards/7H.png");
	sevenSimage1=loadImage("handCards/7S.png");
	eightCimage1=loadImage("handCards/8C.png");
	eightDimage1=loadImage("handCards/8D.png");
    eightHimage1=loadImage("handCards/8H.png");
	eightSimage1=loadImage("handCards/8S.png");
    nineCimage1=loadImage("handCards/9C.png");
	ninetDimage1=loadImage("handCards/9D.png");
    ninetHimage1=loadImage("handCards/9H.png");
	nineSimage1 =loadImage("handCards/9S.png");
	tenthCimage1=loadImage("handCards/10C.png");
	tenthDimage1=loadImage("handCards/10D.png");
    tenthHimage1=loadImage("handCards/10H.png");
	tenthSimage1=loadImage("handCards/10S.png");
	aceCimage1=loadImage("handCards/AC.png");
	aceDimage1  =loadImage("handCards/AD.png");
    aceHimage1 =loadImage("handCards/AH.png");
	aceSimage1  =loadImage("handCards/AS.png");
	jackCimage1 =loadImage("handCards/JC.png");
	jackDimage1 =loadImage("handCards/JD.png");
    jackHimage1 =loadImage("handCards/JH.png");
	jackSimage1 =loadImage("handCards/JS.png");
    queenCimage1 =loadImage("handCards/QC.png");
	queenDimage1=loadImage("handCards/QD.png");
    queenHimage1=loadImage("handCards/QH.png");
	queenSimage1=loadImage("handCards/QS.png");
	kingCimage1 =loadImage("handCards/KC.png");
    kingDimage1 =loadImage("handCards/KD.png");
    kingHimage1 =loadImage("handCards/KH.png");
    kingSimage1 =loadImage("handCards/KS.png");
}

function setup() {
	createCanvas(displayWidth,displayHeight+300);
   
	block11=createSprite(130,100,80,50)
    block11.scale=1.3
	block12=createSprite(255,100,70,50)
	block12.addImage(tenthCimage)
	block12.scale=0.1
	block13=createSprite(370,100,70,50)
	block13.addImage(nineCimage)
	block13.scale=0.1
	block14=createSprite(485,100,70,50)
	block14.addImage(eightCimage)
	block14.scale=0.1
	block15=createSprite(600,100,70,50)
	block15.addImage(sevenCimage)
	block15.scale=0.1
	block16=createSprite(715,100,70,50)
	block16.addImage(sevenDimage)
	block16.scale=0.1
	block17=createSprite(830,100,70,50)
	block17.addImage(eightDimage)
	block17.scale=0.1
	block18=createSprite(945,100,70,50)
	block18.addImage(ninetDimage)
	block18.scale=0.1
	block19=createSprite(1060,100,70,50)
	block19.addImage(tenthDimage)
	block19.scale=0.1
	block110=createSprite(1175,100,100,70)


	block21=createSprite(130,180,70,50)
	block21.addImage(tenthHimage)
	block21.scale=0.1
	block22=createSprite(255,180,70,50)
	block22.addImage(queenCimage)
	block22.scale=0.1
	block23=createSprite(370,180,70,50)
	block23.addImage(sixCimage)
	block23.scale=0.1
	block24=createSprite(485,180,70,50)
	block24.addImage(fiveCimage)
	block24.scale=0.1
	block25=createSprite(600,180,70,50)
	block25.addImage(fourCimage)
	block25.scale=0.1
	block26=createSprite(715,180,70,50)
	block26.addImage(fourDimage)
	block26.scale=0.1
	block27=createSprite(830,180,70,50)
	block27.addImage(fiveDimage)
	block27.scale=0.1
	block28=createSprite(945,180,70,50)
	block28.addImage(sixDimage)
	block28.scale=0.1
	block29=createSprite(1060,180,70,50)
	block29.addImage(queenSimage)
	block29.scale=0.1
	block210=createSprite(1175,180,70,50)
	block210.addImage(tenthSimage)
	block210.scale=0.1

	block31=createSprite(130,260,70,50)
	block31.addImage(ninetHimage)
	block31.scale=0.1
	block32=createSprite(255,260,70,50)
	block32.addImage(sixHimage)
	block32.scale=0.1
	block33=createSprite(370,260,70,50)
	block33.addImage(kingCimage)
	block33.scale=0.1
	block34=createSprite(485,260,70,50)
	block34.addImage(threeCimage)
	block34.scale=0.1
	block35=createSprite(600,260,70,50)
	block35.addImage(twoCimage)
	block35.scale=0.1
	block36=createSprite(715,260,70,50)
	block36.addImage(twoDimage)
	block36.scale=0.1
	block37=createSprite(830,260,70,50)
	block37.addImage(threeDimage)
	block37.scale=0.1
	block38=createSprite(945,260,70,50)
	block38.addImage(kingSimage)
	block38.scale=0.1
	block39=createSprite(1060,260,70,50)
	block39.addImage(sixSimage)
	block39.scale=0.1
	block310=createSprite(1175,260,70,50)
	block310.addImage(nineSimage)
	block310.scale=0.1

	block41=createSprite(130,340,70,50)
	block41.addImage(eightHimage)
	block41.scale=0.1
	block42=createSprite(255,340,70,50)
	block42.addImage(fiveHimage)
	block42.scale=0.1
	block43=createSprite(370,340,70,50)
	block43.addImage(threeHimage)
	block43.scale=0.1
	block44=createSprite(485,340,70,50)
	block44.addImage(queenHimage)
	block44.scale=0.1
	block45=createSprite(600,340,70,50)
	block45.addImage(aceCimage)
	block45.scale=0.1
	block46=createSprite(715,340,70,50)
	block46.addImage(aceDimage)
	block46.scale=0.1
	block47=createSprite(830,340,70,50)
	block47.addImage(queenDimage)
	block47.scale=0.1
	block48=createSprite(945,340,70,50)
	block48.addImage(threeSimage)
	block48.scale=0.1
	block49=createSprite(1060,340,70,50)
	block49.addImage(fiveSimage)
	block49.scale=0.1
	block410=createSprite(1175,340,70,50)
	block410.addImage(eightSimage)
	block410.scale=0.1

	block51=createSprite(130,420,70,50)
	block51.addImage(sevenHimage)
	block51.scale=0.1
	block52=createSprite(255,420,70,50)
	block52.addImage(fourHimage)
	block52.scale=0.1
	block53=createSprite(370,420,70,50)
	block53.addImage(twoHimage)
	block53.scale=0.1
	block54=createSprite(485,420,70,50)
	block54.addImage(aceHimage)
	block54.scale=0.1
	block55=createSprite(600,420,70,50)
	block55.addImage(kingHimage)
	block55.scale=0.1
	block56=createSprite(715,420,70,50)
	block56.addImage(kingDimage)
	block56.scale=0.1
	block57=createSprite(830,420,70,50)
	block57.addImage(aceSimage)
	block57.scale=0.1
	block58=createSprite(945,420,70,50)
	block58.addImage(twoSimage)
	block58.scale=0.1
	block59=createSprite(1060,420,70,50)
	block59.addImage(fourSimage)
	block59.scale=0.1
	block510=createSprite(1175,420,70,50)
	block510.addImage(sevenSimage)
	block510.scale=0.1
   
	block61=createSprite(130,500,70,50)
	block61.addImage(sevenSimage)
	block61.scale=0.1
	block62=createSprite(255,500,70,50)
	block62.addImage(fourSimage)
	block62.scale=0.1
	block63=createSprite(370,500,70,50)
	block63.addImage(twoSimage)
	block63.scale=0.1
	block64=createSprite(485,500,70,50)
	block64.addImage(aceSimage)
	block64.scale=0.1
	block65=createSprite(600,500,70,50)
	block65.addImage(kingSimage)
	block65.scale=0.1
	block66=createSprite(715,500,70,50)
	block66.addImage(kingCimage)
	block66.scale=0.1
	block67=createSprite(830,500,70,50)
	block67.addImage(aceHimage)
	block67.scale=0.1
	block68=createSprite(945,500,70,50)
	block68.addImage(twoHimage)
	block68.scale=0.1
	block69=createSprite(1060,500,70,50)
	block69.addImage(fourHimage)
	block69.scale=0.1
	block610=createSprite(1175,500,70,50)
	block610.addImage(sevenHimage)
	block610.scale=0.1

	block71=createSprite(130,580,70,50)
	block71.addImage(eightSimage)
	block71.scale=0.1
	block72=createSprite(255,580,70,50)
	block72.addImage(fiveSimage)
	block72.scale=0.1
	block73=createSprite(370,580,70,50)
	block73.addImage(threeSimage)
	block73.scale=0.1
	block74=createSprite(485,580,70,50)
	block74.addImage(queenSimage)
	block74.scale=0.1
	block75=createSprite(600,580,70,50)
	block75.addImage(aceDimage)
	block75.scale=0.1
	block76=createSprite(715,580,70,50)
	block76.addImage(aceCimage)
	block76.scale=0.1
	block77=createSprite(830,580,70,50)
	block77.addImage(queenCimage)
	block77.scale=0.1
	block78=createSprite(945,580,70,50)
	block78.addImage(threeHimage)
	block78.scale=0.1
	block79=createSprite(1060,580,70,50)
	block79.addImage(fiveHimage)
	block79.scale=0.1
	block710=createSprite(1175,580,70,50)
	block710.addImage(eightHimage)
	block710.scale=0.1

	block81=createSprite(130,660,70,50)
	block81.addImage(nineSimage)
	block81.scale=0.1
	block82=createSprite(255,660,70,50)
	block82.addImage(sixSimage)
	block82.scale=0.1
	block83=createSprite(370,660,70,50)
	block83.addImage(kingDimage)
	block83.scale=0.1
	block84=createSprite(485,660,70,50)
	block84.addImage(threeDimage)
	block84.scale=0.1
	block85=createSprite(600,660,70,50)
	block85.addImage(twoDimage)
	block85.scale=0.1
	block86=createSprite(715,660,70,50)
	block86.addImage(twoCimage)
	block86.scale=0.1
	block87=createSprite(830,660,70,50)
	block87.addImage(threeCimage)
	block87.scale=0.1
	block88=createSprite(945,660,70,50)
	block88.addImage(kingHimage)
	block88.scale=0.1
	block89=createSprite(1060,660,70,50)
	block89.addImage(sixHimage)
	block89.scale=0.1
	block810=createSprite(1175,660,70,50)
	block810.addImage(ninetHimage)
	block810.scale=0.1

	block91=createSprite(130,740,70,50)
	block91.addImage(tenthSimage)
	block91.scale=0.1
	block92=createSprite(255,740,70,50)
	block92.addImage(queenDimage)
	block92.scale=0.1
	block93=createSprite(370,740,70,50)
	block93.addImage(sixDimage)
	block93.scale=0.1
	block94=createSprite(485,740,70,50)
	block94.addImage(fiveDimage)
	block94.scale=0.1
	block95=createSprite(600,740,70,50)
	block95.addImage(fourDimage)
	block95.scale=0.1
	block96=createSprite(715,740,70,50)
	block96.addImage(fourCimage)
	block96.scale=0.1
	block97=createSprite(830,740,70,50)
	block97.addImage(fiveCimage)
	block97.scale=0.1
	block98=createSprite(945,740,70,50)
	block98.addImage(sixCimage)
	block98.scale=0.1
	block99=createSprite(1060,740,70,50)
	block99.addImage(queenHimage)
	block99.scale=0.1
	block910=createSprite(1175,740,70,50)
	block910.addImage(tenthHimage)
	block910.scale=0.1

	block101=createSprite(130,820,100,70)
	block102=createSprite(255,820,70,50)
	block102.addImage(tenthDimage)
	block102.scale=0.1
	block103=createSprite(370,820,70,50)
	block103.addImage(ninetDimage)
	block103.scale=0.1
	block104=createSprite(485,820,70,50)
	block104.addImage(eightDimage)
	block104.scale=0.1
	block105=createSprite(600,820,70,50)
	block105.addImage(sevenDimage)
	block105.scale=0.1
	block106=createSprite(715,820,70,50)
	block106.addImage(sevenCimage)
	block106.scale=0.1
	block107=createSprite(830,820,70,50)
	block107.addImage(eightCimage)
	block107.scale=0.1
	block108=createSprite(945,820,70,50)
	block108.addImage(nineCimage)
	block108.scale=0.1
	block109=createSprite(1060,820,70,50)
	block109.addImage(tenthCimage)
	block109.scale=0.1
	block1010=createSprite(1175,820,100,70);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  // board = createSprite(200,200)//
   //board.addImage(bgImage)//
    
  deck = createSprite(660,960)
  deck.addImage(deckImage);
   card = createSprite(660,460);


   card.scale=0.5
 card.visible= false;
	Engine.run(engine);  
  
}

function randomImages(){
	abc=Math.round(random(1,52));
	switch(abc) {
		case 1 : card.addImage(twoCimage1);
		break;
		case 2 : card.addImage(twoDimage1)
		break;
		case 3 : card.addImage(twoHimage1);
		break;
		case 4 : card.addImage(twoSimage1)
		break;
		case 5 : card.addImage(threeCimage1)
		break;
		case 6 : card.addImage(threeDimage1)
		break;
		case 7 : card.addImage(threeHimage1)
		break;
		case 8 : card.addImage(threeSimage1)
		break;
		case 9 : card.addImage(fourCimage1)
		break;
		case 10 : card.addImage(fourDimage1)
		break;
		case 11 : card.addImage(fourHimage1)
		break;
		case  12 : card.addImage(fourSimage1)
		break;
		case 13 : card.addImage(fiveCimage1)
		break;
		case 14 : card.addImage(fiveDimage1)
		break;
		case 15 : card.addImage(fiveHimage1)
		break;
		case 16 : card.addImage(fiveSimage1)
		break;
		case 17 : card.addImage(sixCimage1)
		break;
		case 18 : card.addImage(sixDimage1)
		break;
		case 19 : card.addImage(sixHimage1)
		break;
		case 20 : card.addImage(sixSimage1)
		break;
		case 21 : card.addImage(sevenCimage1)
		break;
		case 22 : card.addImage(sevenDimage1)
		break;
		case  23: card.addImage(sevenHimage1)
		break;
		case 24 : card.addImage(sevenSimage1)
		break;
		case 25 : card.addImage(eightCimage1)
		break;
		case 26 : card.addImage(eightDimage1)
		break;
		case 27 : card.addImage(eightHimage1)
		break;
		case 28 : card.addImage(eightSimage1)
		break;
		case 29 : card.addImage(nineCimage1)
		break;
		case 30 : card.addImage(ninetDimage1)
		break;
		case 31 : card.addImage(ninetHimage1)
		break;
		case 32 : card.addImage(nineSimage1)
		break;
		case 33 : card.addImage(tenthCimage1)
		break;
		case 34 : card.addImage(tenthDimage1)
		break;
		case 35 : card.addImage(tenthHimage1)
		break;
		case 36 : card.addImage(tenthSimage1)
		break;
		case 37 : card.addImage(jackCimage1)
		break;
		case 38 : card.addImage(jackDimage1)
		break;
		case 39 : card.addImage(jackHimage1)
		break;
		case 40 : card.addImage(jackSimage1)
		break;
		case 41 : card.addImage(queenCimage1)
		break;
		case 42 : card.addImage(queenDimage1)
		break;
		case 43 : card.addImage(queenHimage1)
		break;
		case 44 : card.addImage(queenSimage1)
		break;
		case 45 : card.addImage(kingCimage1)
		break;
		case 46 : card.addImage(kingDimage1)
		break;
		case 47 : card.addImage(kingHimage1)
		break;
		case 48 : card.addImage(kingSimage1)
		break;
		case 49 : card.addImage(aceCimage1)
		break;
		case 50 : card.addImage(aceDimage1)
		break;
		case 51 : card.addImage(aceHimage1)
		break;
		case 52 : card.addImage(aceSimage1)
		break;
	}
	
}


function draw() {
  rectMode(CENTER);
  background(20);

  text(mouseX+","+ mouseY,mouseX,mouseY)

  if (mousePressedOver(deck)){
	  card.visible= true;
      randomImages();
  }
  if (mousePressedOver(card)){
	  card.visible=false;
  }
  
 

 
  drawSprites();
 //  textSize(18);
  //text("Click here to pick a card",450,740);


 
}



