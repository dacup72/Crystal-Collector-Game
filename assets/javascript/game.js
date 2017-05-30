
// CLICK FUNCTIONS

window.onload = function() {
	game.start();
	var clickDisabled = false;
	if (gameRunning === true) {
		$("#crystal1").click(function() {
			if (clickDisabled === true) {
				return;
			}
			else {
				clickDisabled = true;
				crystal1Clicked = true;
				game.crystalClick();
				setTimeout(function(){clickDisabled = false;}, 500);
			};		
		});	
		$("#crystal2").click(function() {
			if (clickDisabled === true) {
				return;
			}
			else {
				clickDisabled = true;
				crystal2Clicked = true;
				game.crystalClick();
				setTimeout(function(){clickDisabled = false;}, 500);
			};		
		});	
		$("#crystal3").click(function() {
			if (clickDisabled === true) {
				return;
			}
			else {
				clickDisabled = true;
				crystal3Clicked = true;
				game.crystalClick();
				setTimeout(function(){clickDisabled = false;}, 500);
			};		
		});	
		$("#crystal4").click(function() {
			if (clickDisabled === true) {
				return;
			}
			else {
				clickDisabled = true;
				crystal4Clicked = true;
				game.crystalClick();
				setTimeout(function(){clickDisabled = false;}, 500);
			};		
		});	
	};
};

		

// GLOBAL VARIABLES

var wins = 0;
var losses = 0;
var currentScore = 0;
var targetNumber = 0;
var randomNumberArray = [];
var crystal1Number = 0;
var crystal2Number = 0;
var crystal3Number = 0;
var crystal4Number = 0;
var crystal1Clicked = false;
var crystal2Clicked = false;
var crystal3Clicked = false;
var crystal4Clicked = false;
var gameRunning = true;

// GAME OBJECT

var game = {
	start: function() {
		currentScore = 0;
		targetNumber = Math.floor(Math.random() * (35-15+1)) + 15;
		gameRunning = true;
		randomNumberArray = [];
		var randomNumber1 = Math.floor(Math.random() * (4-2+1)) + 2;
		var randomNumber2 = Math.floor(Math.random() * (7-5+1)) + 5;
		var randomNumber3 = Math.floor(Math.random() * (12-8+1)) + 8;
		var randomNumber4 = Math.floor(Math.random() * (20-13+1)) + 13;
		randomNumberArray.push(randomNumber1);
		randomNumberArray.push(randomNumber2);
		randomNumberArray.push(randomNumber3);
		randomNumberArray.push(randomNumber4);
		var crystal1Number = 0;
		var crystal2Number = 0;
		var crystal3Number = 0;
		var crystal4Number = 0;
		game.crystalNumberGenerator();
		game.crystalNumberGenerator();
		game.crystalNumberGenerator();
		game.crystalNumberGenerator();
		$("#targetNumberDisplay").html(targetNumber);
		$("#scoreDisplay").html(currentScore);
		$("#lossesDisplay").html("Losses: " + losses);
		$("#winsDisplay").html("Wins: " + wins);
	},
	crystalNumberGenerator: function() {
		if (crystal1Number === 0) {
			var spliceNumber  = Math.floor(Math.random() * 4);
			crystal1Number = randomNumberArray[spliceNumber];
			randomNumberArray.splice(spliceNumber, 1);
		}
		else if (crystal2Number === 0) {
			var spliceNumber2  = Math.floor(Math.random() * 3);
			crystal2Number = randomNumberArray[spliceNumber2];
			randomNumberArray.splice(spliceNumber2, 1);
		}
		else if (crystal3Number === 0) {
			var spliceNumber3  = Math.floor(Math.random() * 2);
			crystal3Number = randomNumberArray[spliceNumber3];
			randomNumberArray.splice(spliceNumber3, 1);
		}
		else {
			crystal4Number = randomNumberArray[0];
		};	
	},

	crystalClick: function() {
		if (crystal1Clicked === true && gameRunning === true) {
			currentScore = (currentScore + crystal1Number);
			$("#scoreDisplay").html(currentScore);
			crystal1Clicked = false;
		};
		if (crystal2Clicked === true && gameRunning === true) {
			currentScore = (currentScore + crystal2Number);
			$("#scoreDisplay").html(currentScore);
			crystal2Clicked = false;
		};
		if (crystal3Clicked === true && gameRunning === true) {
			currentScore = (currentScore + crystal3Number);
			$("#scoreDisplay").html(currentScore);
			crystal3Clicked = false;
		};
		if (crystal4Clicked === true && gameRunning === true) {
			currentScore = (currentScore + crystal4Number);
			$("#scoreDisplay").html(currentScore);
			crystal4Clicked = false;
		};
		if (currentScore === targetNumber && gameRunning === true) {
			wins++;
			currentScore = 0;
			$(".box-popup-win").css("opacity", 1);
			$(".container").css("opacity", 0.5);
			gameRunning = false;
			game.popupWin();
		};
		if (currentScore > targetNumber && gameRunning === true) {
			losses++;
			currentScore = 0;
			$(".box-popup-lose").css("opacity", 1);
			$(".container").css("opacity", 0.5);
			gameRunning = false;
			game.popupLose();
		};
		$("#crystal4").bind('click');
	},
	popupLose: function() {
		$(".btn").click(function() {
			$(".box-popup-lose").css("opacity", 0);
			$(".container").css("opacity", 1);
			game.start();
		});	
	},
	popupWin: function() {
		$(".btn").click(function() {
			$(".box-popup-win").css("opacity", 0);
			$(".container").css("opacity", 1);
			game.start();
		});
	},
};



