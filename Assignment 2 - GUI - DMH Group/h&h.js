// Constants
var FPS = 30;
var BUTTON_WIDTH = 300;
var BUTTON_HEIGHT = 50;
var BUTTON_OFFSET = 15;
var BUTTON_TEXT_X_OFFSET = BUTTON_WIDTH/2;
var BUTTON_TEXT_Y_OFFSET = 35;
var BUTTON_SELECTION_INDICATOR_OFFSET = 30;

// Canvas setup
var _canvas = document.getElementById("_canvas");
_canvas.width = 1280;
_canvas.height = 800;
var _ctx = _canvas.getContext("2d");

// Content
var uiElementTypes = { buttons:0, simpleText:1 };

var screenEnum = { title:0,  newGame:1, loadGame:2, settings:3, dlc:4, credits:5, quitGame:6, saveGame:7, loadingScreen:8, firstPerson:9, thirdPerson:10, mount:11, 
					pause:12, map:13, inventory:14, beastiary:15, gameOver:16, winState:17, controls: 18};

	var screenNames 	= {title:"HALBERDS & HELLHOUNDS", newGame:"NEW GAME", loadGame:"LOAD GAME", settings:"SETTINGS", dlc:"DLC", credits:"CREDITS", 
						quitGame:"QUIT", saveGame:"SAVE GAME", loadingScreen:"LOADING", firstPerson:"FIRST PERSON", thirdPerson:"THIRD PERSON", mount:"MOUNT", pause:"PAUSED",
						map:"MAP", inventory:"INVENTORY", beastiary:"BEASTIARY", gameOverState:"GAME OVER", winState:"WIN SCREEN", controls:"CONTROLS"};
	
	var titleButtons 	= [{str:screenNames.newGame, targetScreen:screenEnum.newGame, elementType:uiElementTypes.buttons},
						{str:screenNames.loadGame, targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons},
						{str:screenNames.settings, targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons },
						{str:screenNames.dlc, targetScreen:screenEnum.dlc, elementType:uiElementTypes.buttons },
						{str:screenNames.credits, targetScreen:screenEnum.credits, elementType:uiElementTypes.buttons},
						{str:screenNames.quitGame, targetScreen:screenEnum.quitGame, elementType:uiElementTypes.buttons}
						];
	var newGameElements = [ {str:"Easy", targetScreen:screenEnum.saveGame, elementType:uiElementTypes.buttons},
						{str:"Medium", targetScreen:screenEnum.saveGame, elementType:uiElementTypes.buttons},
						{str:"Hard", targetScreen:screenEnum.saveGame, elementType:uiElementTypes.buttons},
						{str:"BACK",  targetScreen:screenEnum.title, elementType:uiElementTypes.buttons}	
						];	
	var loadGameElements = [{str:"Save 1", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"Save 2", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"Save 3", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"BACK",  targetScreen:screenEnum.title, elementType:uiElementTypes.buttons}
						];
	var settingsElements = [{str:"Volume", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Brightness", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Controls", targetScreen:screenEnum.controls, elementType:uiElementTypes.buttons}, 
						{str:"BACK", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons} 
						];
	var dlcElements		= [{str:"Downloadable Content", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons} 
						];
	var creditsElements = [ {str:"DIRECTOR", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"UI", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"SKIP", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons} 
						];
	var quitGameElements= [	{str:"Quit Game?", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"YES", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons},
						{str:"NO", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons}
						];
	var saveGameElements = [{str:"Save your game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Save 1", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"Save 2", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"Save 3", targetScreen:screenEnum.loadingScreen, elementType:uiElementTypes.buttons},
						{str:"BACK", targetScreen:screenEnum.firstPerson, elementType:uiElementTypes.buttons} 
						];
	var loadingScreenElements = [{str:"Loading Screen", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Loading", targetScreen:screenEnum.firstPerson, elementType:uiElementTypes.buttons}
						];
	var firstPersonElements = [ {str:"This is the game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Game State", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"PAUSE", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons}, 
						{str:"WIN", targetScreen:screenEnum.winState, elementType:uiElementTypes.buttons}, 
						{str:"GAME OVER", targetScreen:screenEnum.gameOverState, elementType:uiElementTypes.buttons} 
						];
	var thirdPersonElements = [ {str:"This is the game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Game State", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"PAUSE", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons}, 
						{str:"WIN", targetScreen:screenEnum.winState, elementType:uiElementTypes.buttons}, 
						{str:"GAME OVER", targetScreen:screenEnum.gameOverState, elementType:uiElementTypes.buttons} 
						];
	var mountElements = [ {str:"This is the game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Game State", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"PAUSE", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons}, 
						{str:"WIN", targetScreen:screenEnum.winState, elementType:uiElementTypes.buttons}, 
						{str:"GAME OVER", targetScreen:screenEnum.gameOverState, elementType:uiElementTypes.buttons} 
						];
	var pauseElements = [{str:"GAME PAUSED", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Save Game", targetScreen:screenEnum.saveGame, elementType:uiElementTypes.buttons},
						{str:"Load Game", targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons},
						{str:"Map", targetScreen:screenEnum.map, elementType:uiElementTypes.buttons},
						{str:"Inventory", targetScreen:screenEnum.inventory, elementType:uiElementTypes.buttons},
						{str:"Beastiary", targetScreen:screenEnum.beastiary, elementType:uiElementTypes.buttons},
						{str:"Back to Title", targetScreen:screenEnum.title, elementType:uiElementTypes.buttons},
						{str:"Resume", targetScreen:screenEnum.firstPerson, elementType:uiElementTypes.buttons} 
						];
	var mapElements 	=  [{str:"This is the map", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons} 
						];	
	var inventoryElements = [{str:"INVENTORY", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons}
						];
	var beastiaryElements = [{str:"BESTIARY", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pause, elementType:uiElementTypes.buttons}
						];
	var gameOverElements=[ 	{str:"GAME OVER, MAN", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"LOAD GAME", targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons}, 
						{str:"EXIT GAME", targetScreen:screenEnum.quitGame, elementType:uiElementTypes.buttons} 
						];
	var winStateElements=[  {str:"YOU WON!", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"CREDITS", targetScreen:screenEnum.credits, elementType:uiElementTypes.buttons} 
						];
	var controlsElements = [{str:"This is the controls screen", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons} 
						];
	
	var imgArray = [{img:null, str:"background", x:0, y:0, w:1280, h:800, over:false}];
	
	var screens = [{enter:enterTitle, update:updateTitle, exit:exitTitle, str:screenNames.title, content:titleButtons, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterNewGame, update:updateNewGame, exit:exitNewGame, str:screenNames.newGame, content:newGameElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterLoadGame, update:updateLoadGame, exit:exitLoadGame, str:screenNames.loadGame, content:loadGameElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterSettings, update:updateSettings, exit:exitSettings, str:screenNames.settings, content:settingsElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterDlc, update:updateDlc, exit:exitDlc, str:screenNames.Dlc, content:dlcElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterCredits, update:updateCredits, exit:exitCredits, str:screenNames.credits, content:creditsElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterQuit, update:updateQuit, exit:exitQuit, str:screenNames.quitGame, content:quitGameElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterSave, update:updateSave, exit:exitSave, str:screenNames.saveGame, content: saveGameElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterLoadingScreen, update:updateLoadingScreen, exit:exitLoadingScreen, str:screenNames.loadingScreen, content:loadingScreenElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterFirstPerson, update:updateFirstPerson, exit:exitFirstPerson, str:screenNames.firstPerson, content:firstPersonElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterThirdPerson, update:updateThirdPerson, exit:exitThirdPerson, str:screenNames.thirdPerson, content:thirdPersonElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterMount, update:updateMount, exit:exitMount, str:screenNames.mount, content:mountElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterPause, update:updatePause, exit:exitPause, str:screenNames.pause, content: pauseElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterMap, update:updateMap, exit:exitMap, str:screenNames.mapScreen, content: mapElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterInventory, update:updateInventory, exit:exitInventory, str:screenNames.inventory, content: inventoryElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterBeastiary, update:updateBeastiary, exit:exitBeastiary, str:screenNames.beastiary, content: beastiaryElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterGameOver, update:updateGameOver, exit:exitGameOver, str:screenNames.gameOverState, content: gameOverElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterWinState, update:updateWinState, exit:exitWinState, str:screenNames.winState, content: winStateElements, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterControls, update:updateControls, exit:exitControls, str:screenNames.controls, content: controlsElements, bgImage:imgArray[0], textColor:"Black"}
				];
var screenStack = [];
var currentScreen;
						
var menuPositionY = 0;
var currentMenuItemSelection = 0;

// Execute init
initGame();

document.onkeyup = function(e)
{ 
	switch(window.event.keyCode){
		case(38): // Up Arrow
			var newValue = currentMenuItemSelection -1;
			if ( newValue >= 0 && currentScreen.content[newValue].elementType == uiElementTypes.buttons )
			{
				currentMenuItemSelection = newValue;
			}
			break;
		case(40): // Down Arrow
			var newValue = currentMenuItemSelection + 1;
			if ( newValue < currentScreen.content.length && currentScreen.content[newValue].elementType == uiElementTypes.buttons )
			{
				currentMenuItemSelection = newValue;
			}
			break;
		case(13): // Enter
			activateButton();
			break;	
			
   	}
};

function activateButton()
{
	changeScreenTo(currentScreen.content[currentMenuItemSelection].targetScreen);
}

function initGame()
{
	changeScreenTo(screenEnum.title);
	loadImages();
	
	setInterval(update, 1000/FPS);
	
	window.addEventListener('resize', resizeCanvas, false)
	resizeCanvas();
}

function resizeCanvas() 
{
	_canvas.width = window.innerWidth;
	_canvas.height = window.innerHeight;
}

function update()
{
	currentScreen = screenStack[screenStack.length - 1];
	
	_ctx.clearRect(0,0,_canvas.width,_canvas.height);
	
	_ctx.beginPath();
	_ctx.font = "60px Arial";
	_ctx.lineWidth=1;
	_ctx.strokeStyle = currentScreen.textColor;
	_ctx.textAlign = "center";
	_ctx.strokeText(currentScreen.str, _canvas.width/2, _canvas.height/4);
	
	menuPositionY = _canvas.height/4 + 60;
	
	currentScreen.update();
}

function displayContent()
{
	var currentContent = currentScreen.content;
	var currentXPos = _canvas.width/2 - 150;
	var currentYPos = menuPositionY;
	
	for (var i=0; i < currentContent.length; i++)
	{
		var textX = currentXPos + BUTTON_TEXT_X_OFFSET;
		var textY = currentYPos + BUTTON_TEXT_Y_OFFSET;
			
		if ( currentContent[i].elementType == uiElementTypes.simpleText )
		{
			// draw Text
			_ctx.beginPath();
			_ctx.font = "40px";
			_ctx.lineWidth = 1;
			_ctx.strokeStyle = currentScreen.textColor;
			_ctx.textAlign = "center";
			_ctx.strokeText(currentContent[i].str, textX, textY);
		}
		else if ( currentContent[i].elementType == uiElementTypes.buttons )
		{
			// check if its current selection to draw circle
			// draw buttons
			_ctx.beginPath();
			_ctx.strokeStyle = currentScreen.textColor;
			_ctx.rect(currentXPos, currentYPos, BUTTON_WIDTH, BUTTON_HEIGHT); 
			_ctx.stroke();
			
			// draw button text
			_ctx.beginPath();
			_ctx.font = "30px Arial";
			_ctx.lineWidth = 1;
			_ctx.strokeStyle = currentScreen.textColor;
			_ctx.textAlign = "center";
			_ctx.strokeText(currentContent[i].str, textX, textY);
			
			if ( currentMenuItemSelection == i )
			{
				// draw circle to indicate selection
				var radius = 10;

				_ctx.beginPath();
				_ctx.arc(currentXPos - BUTTON_SELECTION_INDICATOR_OFFSET, currentYPos + BUTTON_SELECTION_INDICATOR_OFFSET, radius, 0, 2 * Math.PI, false);
				_ctx.lineWidth = 1;
				_ctx.strokeStyle = currentScreen.textColor;
				_ctx.stroke();
			}
		}
		
		currentYPos = currentYPos + BUTTON_HEIGHT + BUTTON_OFFSET;
	}
}

function changeScreenTo(screenIdx)
{
	if ( screenStack.length > 0 )
	{
		var currentIndex = screenStack.length - 1;
		var currentScreen = screenStack[currentIndex];
	
		currentScreen.exit();
		
		var indexOfRequestedScreen = screenStack.indexOf(screens[screenIdx]);
		
		if ( indexOfRequestedScreen > -1 )
		{
			// If requested screen was already in the stack, just pop out screens until reaching it.
			for (var i = screenStack.length-1; i > indexOfRequestedScreen; i--)
			{
				screenStack.pop();
			}
		}
		else
		{
			screenStack.push(screens[screenIdx]);
		}
	}
	else
	{
		screenStack.push(screens[screenIdx]);
	}

	
	currentScreen = screenStack[screenStack.length - 1];
	
	for (var i = 0; i < currentScreen.content.length; i++)
	{
		if ( currentScreen.content[i].elementType == uiElementTypes.buttons )
		{
			currentMenuItemSelection = i;
			break;
		}
	}
	
	currentScreen.enter();
}

function loadImages()
{
	for (var i = 0; i < imgArray.length; i++)
	{
		imgArray[i].img = new Image();
		imgArray[i].img.src = "images/"+imgArray[i].str+".png";
	}
}

//title MENU
function enterTitle()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateTitle()
{
	displayContent();
}

function exitTitle()
{
	// exit code
}

//END OF Title

//NEWGAME
function enterNewGame()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateNewGame()
{
	displayContent();
}
function exitNewGame()
{
	//exit code
}
//END OF NEWGAME

//LOADGAME
function enterLoadGame()
{
	_canvas.style.backgroundImage = "url(images/background.png";
}

function updateLoadGame()
{
	displayContent();
}

function exitLoadGame()
{
	
}
//end of load game

//LOADGAME
function enterLoadingScreen()
{
	_canvas.style.backgroundImage = "url(images/background.png";
}

function updateLoadingScreen()
{
	displayContent();
}

function exitLoadingScreen()
{
	
}
//end of loadingscreen

//SETTINGS
function enterSettings()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateSettings()
{
	displayContent();
	
	// Add here any custom Settings screen code if necessary
}

function exitSettings()
{
}
//END OF SETTINGS

// CREDITS
function enterCredits()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateCredits()
{
	displayContent();
}

function exitCredits()
{
}
// END OF CREDITS

//EXTRA
function enterDlc()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}
function updateDlc()
{
	displayContent();
}
function exitDlc()
{
	
}
//END OF EXTRA

//QUIT
function enterQuit()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}
function updateQuit()
{
	displayContent();
}
function exitQuit()
{
	
}
//END OF QUIT

//firstPerson
function enterFirstPerson()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateFirstPerson()
{
	displayContent();
}

function exitFirstPerson()
{
	
}
//END OF FirstPerson

//ThirdPerson
function enterThirdPerson()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateThirdPerson()
{
	displayContent();
}

function exitThirdPerson()
{
	
}
//END OF thirdPerson

//firstPerson
function enterMount()
{
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateMount()
{
	displayContent();
}

function exitMount()
{
	
}
//END OF Mount

//SAVEGAME
function enterSave()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateSave()
{
	displayContent();
}

function exitSave()
{
	// exit code
}
//END OF SAVEGAME

//PAUSE
function enterPause()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updatePause()
{
	displayContent();
}

function exitPause()
{
	// exit code
}
//END OF PAUSE

//MAP
function enterMap()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateMap()
{
	displayContent();
}

function exitMap()
{
	// exit code
}
//END OF MAP


//WINSTATE
function enterWinState()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateWinState()
{
	displayContent();
}

function exitWinState()
{
	// exit code
}
//END WINSTATE

//GAME OVER STATE
function enterGameOver()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateGameOver()
{
	displayContent();
}

function exitGameOver()
{
	// exit code
}
//END OF GAME OVER STATE

//Audio Screen

//CONTROL SETTINGS
function enterControls()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateControls()
{
	displayContent();
}

function exitControls()
{
	// exit code
}
//END OF CONTROL SETTINGS

//inventory
function enterInventory()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateInventory()
{
	displayContent();
}

function exitInventory()
{
	// exit code
}

//beastiary
function enterBeastiary()
{	
	_canvas.style.backgroundImage = "url(images/background.png)";
}

function updateBeastiary()
{
	displayContent();
}

function exitBeastiary()
{
	// exit code
}

