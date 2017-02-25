'use strict';

/**
 * @ngdoc overview
 * @name todoApp
 * @description
 * # todoApp
 *
 * Main module of the application.
 */
angular
  .module('todoApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
  .config(function ($stateProvider, $urlRouterProvider,$locationProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'views/start.html',
        controller: 'StartCtrl'
      })
      .state('play', {
        url: '/play',
        templateUrl: 'views/play.html',
        controller: 'PlayCtrl'
      })
      .state('play-history', {
        url: '/play/:over/:ball',
        templateUrl: 'views/play-history.html',
        controller: 'PlayCtrl'
      });

    $locationProvider.hashPrefix('');
      
  })
  .service('StatisticService', function($filter) {
   var scoreArray = [0,1,2,3,4,6,'W','WD','NB'];
   if(JSON.parse(localStorage.getItem("gameData")) == null){
      var statistics = [];
      var number_of_ball = 0;
      var wicket = 0;
      var run = 0;
      var total_run = 0;
      var score = 0;
      var over = 0;
      var comments = '';
   }
   else{
      var statistics = JSON.parse(localStorage.getItem("gameData"));
      var number_of_ball = statistics[statistics.length-1].ball;
      var wicket = statistics[statistics.length-1].wicket;
      var run = statistics[statistics.length-1].run_per_ball;
      var total_run = statistics[statistics.length-1].total_run;
      var score = statistics[statistics.length-1].score;
      var over = statistics[statistics.length-1].over;
      var comments = statistics[statistics.length-1].comments;
   }

   var gameData = {
      ball: null,
      over: null,
      score: null,
      run_per_ball: null,
      total_run: null,
      wicket: null
   };

   function allcomments(score){
      switch (score) {
         case 0:
            comments = 'No run! dot ball';
            break;
         case 1:
            comments = 'Single on the offside.';
            break;
         case 2:
            comments = 'Good running between the wicket! 2 runs.';
            break;
         case 3:
            comments = 'They have taken 3 runs! excellent running';
            break;
         case 4:
            comments = 'Four! great shot!';
            break;
         case 6:
            comments = 'Six! Thats a huge six!';
            break;
         case 'WD':
            comments = 'Wide delivery way outside off stamp!';
            break;
         case 'NB':
            comments = 'No Ball! another extra run added to the scoreboard';
            break;
         case 'W':
            comments = 'Out! a wicket fall';
            break;
         default: 
            comments = 'Its raining';
      }
      return comments;
   }


   return {
      play: function(){
         number_of_ball++;
     
         score = scoreArray[Math.floor(Math.random() * scoreArray.length)];
         if(number_of_ball == 6){
            number_of_ball = 0;
            over++;
         }

         //console.log('initial','Overs: '+over+'.'+number_of_ball,'Score: '+score);
         switch (score) {
            case 'WD':
               run = 1;
               number_of_ball = number_of_ball - 1;
               comments: allcomments('WD');
               break;
            case 'NB':
               run = 1;
               number_of_ball = number_of_ball - 1;
               comments: allcomments('NB');
               break;
            case 'W':
               run = 0;
               wicket = wicket + 1;
               comments: allcomments('W');
               break;
            default: 
               run = score;
               comments: allcomments(run);
         }
         total_run = total_run + run;

         console.log('final','Overs: '+over+'.'+number_of_ball,'Score: '+score, 'RPB: '+run, 'Total: '+total_run,'Wicket:'+wicket, 'Comments:'+comments );
         console.log(number_of_ball)
         gameData = {
            ball: number_of_ball<0 ? 5:number_of_ball,
            over: number_of_ball<0 ? ((over-1)<1 ? 0:(over-1)):over,
            score: score,
            run_per_ball: run,
            total_run: total_run,
            wicket: wicket,
            comments: comments
         }
         statistics.push(gameData);
         console.log('statistics',statistics);
         return statistics;
      },

      get: function(ball,over,data) {
        console.log('ball',ball);
        console.log('over',over);
        console.log('data',data);
        if(data){
           var scoresbyball = $filter('filter')(data, {'ball':ball,'over':over});
           console.log('scoresbyballArray',scoresbyball);
           var indexOfScore = data.indexOf(scoresbyball[0]);
           scoresbyball[0].indexOfScore = indexOfScore;
           console.log('scoresbyball',scoresbyball[0]);
           return scoresbyball[0];
        }
      }
    }
  });
