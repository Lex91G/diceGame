"use strict"


function roll4SidedDice(){
	var sides=4;
	var Roll4SidedDieResults = Math.floor(Math.random()* sides) +1;
	
    var score = Roll4SidedDieResults * 3;

    

    
    return score;  
    }

function rollSwitchScorDie(){
		var sides=6;
	var rollSwitchDieResults = Math.floor(Math.random()* sides)  +1;
	
		if ( 3 === rollSwitchDieResults || 5 === rollSwitchDieResults ){
			 var score = 15 * rollSwitchDieResults
		alert("Great Roll");
		}
		else { 
			score = rollSwitchDieResults
		}
		
		return score;
    }


function rollMysteryBox8Sided(){
	var sides = 8;
	var roll8SidedResult= Math.floor(Math.random()* sides) + 1;
		var score = roll8SidedResult;
		if(1 === roll8SidedResult){
			score += 5;
			alert("gained 5");
	}
		else if (2 === roll8SidedResult){
			score += 10;
			alert("move up 10");
	}
		else if (3 === roll8SidedResult){
		
			alert("no good sorry try next time");
	}
		else if (4 === roll8SidedResult){
			score += 8;  
			alert("move up 8");
	}
		else if (5 === roll8SidedResult){
			score +=12;
			alert("gained 12");
	}
		else if (6 === roll8SidedResult){
			
			alert("sorry nothing for you");
	}
		else if (7 === roll8SidedResult){
			score +=30;
			alert("Big Gains: 30 points");
	}
		else if (8 === roll8SidedResult){
			score += 12;
			alert("gain  12");
		}


            
        return score;
    }
    
function rollDoubleDice(score){
	var sides=10;
	var rollDoublediceresult = Math.floor(Math.random()* sides)  + 1;
	var theDoubleDie= Math.floor(Math.random()* sides) +1;

		
	var score = rollDoublediceresult + theDoubleDie;

		
        return score;
    }
    

function roll12SidedDie(score){
	var sides=12;
	var roll12SidedDieResults= Math.floor(Math.random()*sides)  +1;
		
		var results = roll12SidedDieResults * .05;
		var score = Math.round(results) +roll12SidedDieResults;
		
        return score;
    }

function roll20SidedDie(){
	var sides=20;
	var roll20SidedDieResult = Math.floor(Math.random()* sides) + 1;
		var score = roll20SidedDieResult;
 	
        return score;
    }
    
    function displayPickADie(){
    	var pendingScore = 0;
		var pick = prompt("Pick a die?\n" +

					"4\n" +
					"6\n" +
					"8\n" +
					"10\n" +
					"12\n" +
					"20\n" +
					"Exit");

switch(pick){
	case "4":
		pendingScore = roll4SidedDice();
					break;
	case "6":
		pendingScore =	rollSwitchScorDie();
					break;
	case "8":
		pendingScore = rollMysteryBox8Sided();
					break;
	case "10":
		pendingScore =	rollDoubleDice();
					break;
	case "12":
		pendingScore =	roll12SidedDie();
					break;
	case "20":
		pendingScore =	roll20SidedDie();
					break;
	case "exit":	
				myExit();
					break;
				
			
	default:
		pendingScore = displayPickADie();	
					break;			
	}
	return pendingScore;
}


function getTotalNumberOfPlayers(){

	var numberOfPlayers =parseInt(prompt("How many people are playing?"));
	return numberOfPlayers;
}



function getAllPlayersWorking(getTotalNumberOfPlayers){
	var players = [];

	for(var i = 0; i < getTotalNumberOfPlayers; i++){
		var name = prompt("Whats your name?");
		var person = {
			name: name,
			score: 0,
			isWinner: false

		};

		players.push(person);

	}

	return players
}
function getGameGoing(players){
	var finalscore = 100;
	var gameWinner = false;


	for(var i = 0; i <players.length; i++){

		

		players[i].score += displayPickADie();
		console.log("Name: " + players[i].name + " Current Score: " + players[i].score);

		if(finalscore <= players[i].score){

			players[i].isWinner = true;
			gameWinner = true;
			console.log(players[i].name + " You Win!!!");
		return gameWinner;


		}
		

	}
	return gameWinner;
}

function runGame(){

	var numberOfPlayers = getTotalNumberOfPlayers();
	var players = getAllPlayersWorking(numberOfPlayers);
	console.log(players);


	var gameWinner = false;
	while(gameWinner !== true){
		gameWinner = getGameGoing(players);
		

		

	}
	alert("WINNER WINNER CHICKEN DINNER!");
}

runGame();


function myExit(){
	console.log("SIKE!!! Play until you win!");
	
}




