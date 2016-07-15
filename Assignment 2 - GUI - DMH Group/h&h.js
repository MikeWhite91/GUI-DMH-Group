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
	
	