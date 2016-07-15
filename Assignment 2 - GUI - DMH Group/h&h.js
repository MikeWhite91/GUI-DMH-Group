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

var screenEnum = { splash:0, main:1,  newGame:2, loadGame:3, settings:4, credits:5, extra:6, screenshots:7, replays:8, quitGame:9, gameState:10, saveGame:11, pauseGame:12, invScreen:13, bestiaryScreen:14 mapScreen:15,
					winState:16, gameOverState:17, audio:18, visual:19, controls:20, store:21, none:22};
var screenNames = { splash:"SPLASH", main:"MAIN MENU", newGame:"NEW GAME", loadGame:"LOAD GAME", settings:"SETTINGS", credits:"CREDITS", extra:"EXTRA", screenshots:"SCREENSHOTS",  replays:"REPLAYS", quitGame:"QUIT", gameState:"GAME STATE",
					saveGame:"SAVE GAME", pauseGame:"GAME PAUSED", invScreen:"INVENTORY", bestiaryScreen:"BESTIARY", mapScreen:"MAP", winState:"WIN SCREEN", gameOverState:"GAME OVER", audio:"Audio Settings", 
					visual:"Visual Settings", controls:"Control Settings", store:"STORE"};
	
	var mainMenuButtons = [	{str:screenNames.newGame, targetScreen:screenEnum.newGame, elementType:uiElementTypes.buttons},
						{str:screenNames.loadGame, targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons},
						{str:screenNames.settings, targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons },
						{str:screenNames.credits, targetScreen:screenEnum.credits, elementType:uiElementTypes.buttons },
						{str:screenNames.extra, targetScreen:screenEnum.extra, elementType:uiElementTypes.buttons},
						{str:screenNames.quitGame, targetScreen:screenEnum.quitGame, elementType:uiElementTypes.buttons}
						];
	var newGameElements = [ {str:"Easy", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"Medium", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"Hard", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"BACK",  targetScreen:screenEnum.main, elementType:uiElementTypes.buttons}	
						];	
	var loadGameElements = [{str:"SaveState1", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"SaveState2", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"SaveState3", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"BACK",  targetScreen:screenEnum.main, elementType:uiElementTypes.buttons}
						];
	var settingsElements = [{str:"Options page with sound, video and gameplay options.", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Audio", targetScreen:screenEnum.audio, elementType:uiElementTypes.buttons}, 
						{str:"Visual", targetScreen:screenEnum.visual, elementType:uiElementTypes.buttons}, 
						{str:"Controls", targetScreen:screenEnum.controls, elementType:uiElementTypes.buttons}, 
						{str:"BACK", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons} 
						];
	var creditsElements = [ {str:"PRODUCER ...", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"UI PROGRAMMER ...", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons} 
						];
	var extraElements 	= [	{str:"This is the extra's page", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Store", targetScreen:screenEnum.store, elementType:uiElementTypes.buttons}, 
						{str:"Cheats", targetScreen:screenEnum.cheats, elementType:uiElementTypes.buttons}, 
						{str:"BACK", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons} 
						];
	var quitGameElements= [	{str:"Would you like to quit the game?", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"YES", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons},
						{str:"NO", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons}
						];
	var gameStateElements = [ {str:"This is the game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Game State", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"PAUSE", targetScreen:screenEnum.pauseGame, elementType:uiElementTypes.buttons}, 
						{str:"WIN", targetScreen:screenEnum.winState, elementType:uiElementTypes.buttons}, 
						{str:"GAME OVER", targetScreen:screenEnum.gameOverState, elementType:uiElementTypes.buttons}, 
						{str:"BACK", targetScreen:screenEnum.main, elementType:uiElementTypes.buttons} 
						];
	var saveGameElements = [{str:"Save your game", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"SaveState1", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"SaveState2", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"SaveState3", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons},
						{str:"BACK", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons} 
						];
	var pauseGameElements = [{str:"GAME PAUSED", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"Save Game", targetScreen:screenEnum.saveGame, elementType:uiElementTypes.buttons},
						{str:"Load Game", targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons},
						{str:"Map", targetScreen:screenEnum.mapScreen, elementType:uiElementTypes.buttons},
						{str:"BACK", targetScreen:screenEnum.gameState, elementType:uiElementTypes.buttons} 
						];
	var invScreenElements = [{str:"INVENTORY", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pauseGame, elementType:uiElementTypes.buttons}
						];
	var mapElements 	=  [{str:"This is the map", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pauseGame, elementType:uiElementTypes.buttons} 
						];	
	var bestiaryScreenElements = [{str:"BESTIARY", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.pauseGame, elementType:uiElementTypes.buttons}
						];
	var winStateElements=[  {str:"YOU WON!", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"CREDITS", targetScreen:screenEnum.credits, elementType:uiElementTypes.buttons} 
						];
	var gameOverElements=[ 	{str:"GAME OVER, MAN", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"LOAD GAME", targetScreen:screenEnum.loadGame, elementType:uiElementTypes.buttons}, 
						{str:"EXIT GAME", targetScreen:screenEnum.quitGame, elementType:uiElementTypes.buttons} 
						];
	var audioElements = [   {str:"This is the audio screen", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons} 
						];
	var visualElements = [  {str:"This is the visuals screen", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons} 
						];
	var controlsElements = [{str:"This is the controls screen", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.settings, elementType:uiElementTypes.buttons} 
						];
	var storeElements = [   {str:"This is the DLC Store", targetScreen:screenEnum.none, elementType:uiElementTypes.simpleText},
						{str:"BACK", targetScreen:screenEnum.extra, elementType:uiElementTypes.buttons} 
						];
	
	var imgArray = [{img:null, str:"background", x:0, y:0, w:1280, h:800, over:false}];
	
	var screens = [ {enter:enterMain, update:updateMain, exit:exitMain, str:screenNames.main, content:mainMenuButtons, bgImage:imgArray[0], textColor:"Black"},
				{enter:enterNewGame, update:updateNewGame, exit:exitNewGame, str:screenNames.newGame, content:newGameElements, bgImage:imgArray[1], textColor:"Black"},
				{enter:enterLoadGame, update:updateLoadGame, exit:exitLoadGame, str:screenNames.loadGame, content:loadGameElements, bgImage:imgArray[2], text:"Black"},
				{enter:enterSettings, update:updateSettings, exit:exitSettings, str:screenNames.settings, content:settingsElements, bgImage:imgArray[3], textColor:"Black"},
				{enter:enterCredits, update:updateCredits, exit:exitCredits, str:screenNames.credits, content:creditsElements, bgImage:imgArray[4], textColor:"Black"},
				{enter:enterExtra, update:updateExtra, exit:exitExtra, str:screenNames.extra, content:extraElements, bgImage:imgArray[5], textColor:"Black"},
				{enter:enterQuit, update:updateQuit, exit:exitQuit, str:screenNames.quitGame, content:quitGameElements, bgImage:imgArray[6], textColor:"Black"},
				{enter:enterGameState, update:updateGameState, exit:exitGameState, str:screenNames.gameState, content:gameStateElements, bgImage:imgArray[7], textColor:"Black"},
				{enter:enterSave, update:updateSave, exit:exitSave, str:screenNames.saveGame, content: saveGameElements, bgImage:imgArray[8], textColor:"Black"},
				{enter:enterPause, update:updatePause, exit:exitPause, str:screenNames.pauseGame, content: pauseGameElements, bgImage:imgArray[9], textColor:"Black"},
				{enter:enterMap, update:updateMap, exit:exitMap, str:screenNames.mapScreen, content: mapElements, bgImage:imgArray[10], textColor:"Black"},
				{enter:enterWinState, update:updateWinState, exit:exitWinState, str:screenNames.winState, content: winStateElements, bgImage:imgArray[11], textColor:"Black"},
				{enter:enterGameOver, update:updateGameOver, exit:exitGameOver, str:screenNames.gameOverState, content: gameOverElements, bgImage:imgArray[12], textColor:"Black"},
				{enter:enterAudio, update:updateAudio, exit:exitAudio, str:screenNames.audio, content: audioElements, bgImage:imgArray[13], textColor:"Black"},
				{enter:enterVisual, update:updateVisual, exit:exitVisual, str:screenNames.visual, content: visualElements, bgImage:imgArray[14], textColor:"Black"},
				{enter:enterControls, update:updateControls, exit:exitControls, str:screenNames.controls, content: controlsElements, bgImage:imgArray[15], textColor:"Black"},
				{enter:enterStore, update:updateStore, exit:exitStore, str:screenNames.store, content: storeElements, bgImage:imgArray[16], textColor:"Black"},
				{enter:enterCheats, update:updateCheats, exit:exitCheats, str:screenNames.cheats, content: cheatsElements, bgImage:imgArray[17], textColor:"Black"}
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
	changeScreenTo(screenEnum.main);
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
		imgArray[i].img.src = "images/"+imgArray[i].str+".jpg";
	}
}

//MAIN MENU
function enterMain()
{	
	_canvas.style.backgroundImage = "url(images/greyBackground.jpg)";
}

function updateMain()
{
	displayContent();
}

function exitMain()
{
	// exit code
}

//END OF MAIN

//NEWGAME
function enterNewGame()
{
	_canvas.style.backgroundImage = "url(images/redBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/pinkBackground.jpg";
}

function updateLoadGame()
{
	displayContent();
}

function exitLoadGame()
{
	
}

//SETTINGS
function enterSettings()
{
	_canvas.style.backgroundImage = "url(images/nurgleRotBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/eggshellBackground.jpg)";
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
function enterExtra()
{
	_canvas.style.backgroundImage = "url(images/orangeBackground.jpg)";
}
function updateExtra()
{
	displayContent();
}
function exitExtra()
{
	
}
//END OF EXTRA

//QUIT
function enterQuit()
{
	_canvas.style.backgroundImage = "url(images/yellowBackground.jpg)";
}
function updateQuit()
{
	displayContent();
}
function exitQuit()
{
	
}
//END OF QUIT

//GAMESTATE
function enterGameState()
{
	_canvas.style.backgroundImage = "url(images/blueBackground.jpg)";
}

function updateGameState()
{
	displayContent();
}

function exitGameState()
{
	
}
//END OF GAMESTATE

//SAVEGAME
function enterSave()
{	
	_canvas.style.backgroundImage = "url(images/cyanBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/brownBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/limeGreenBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/fenrisBlueBackground.jpg)";
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
	_canvas.style.backgroundImage = "url(images/skinBackground.jpg)";
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
function enterAudio()
{	
	_canvas.style.backgroundImage = "url(images/nurgleRotBackground.jpg)";
}

function updateAudio()
{
	displayContent();
}

function exitAudio()
{
	// exit code
}
//END OF AUDIO

//VISUAL SETTINGS
function enterVisual()
{	
	_canvas.style.backgroundImage = "url(images/nurgleRotBackground.jpg)";
}

function updateVisual()
{
	displayContent();
}

function exitVisual()
{
	// exit code
}
//END OF VISUAL SETTINGS


//CONTROL SETTINGS
function enterControls()
{	
	_canvas.style.backgroundImage = "url(images/nurgleRotBackground.jpg)";
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

//STORE
function enterStore()
{	
	_canvas.style.backgroundImage = "url(images/orangeBackground.jpg)";
}

function updateStore()
{
	displayContent();
}

function exitStore()
{
	// exit code
}
//END OF STORE

//CHEATS
function enterCheats()
{	
	_canvas.style.backgroundImage = "url(images/orangeBackground.jpg)";
}

function updateCheats()
{
	displayContent();
}

function exitCheats()
{
	// exit code
}
//END OF CHEATS