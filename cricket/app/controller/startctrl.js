(function(angular){
'use strict';
angular.module('cricketInfo').controller('StartCtrl', StartCtrl)
StartCtrl.$inject = ['$scope', 'StatisticService'];
function StartCtrl($scope, StatisticService){
        $scope.game = {
            country1: 'Bangladesh',
            country2: 'India',
            to_bowl: null
        };
        $scope.setGame = function (game) {
            if (game.to_bowl == game.country1) {
                game.to_bat = game.country2;
            } else {
                game.to_bat = game.country1;
            }
            console.log(game);
            localStorage.setItem("teamData", JSON.stringify(game));
        }; 
    };
})(window.angular)

