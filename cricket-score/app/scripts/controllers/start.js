'use strict';

/**
 * @ngdoc function
 * @name todoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the todoApp
 */
angular.module('todoApp')
  .controller('StartCtrl', function (StatisticService,$scope) {
     	$scope.game = {
     		country1: 'Bangladesh',
     		country2: 'India',     		
     		to_bowl: null
     	};

     	$scope.setGame = function(game){
     		if(game.to_bowl == game.country1){
		  		game.to_bat = game.country2;
		  	}else{
		  		game.to_bat = game.country1;
		  	}
		  	console.log(game);
			localStorage.setItem("teamData", JSON.stringify(game));
     	}
    
  });
