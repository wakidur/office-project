angular.module('myApp', ['ui.router']);
angular.module('myApp').config(addRoute);
addRoute.$inject = ['$stateProvider', '$urlRouterProvider','$locationProvider'];
function addRoute($stateProvider, $urlRouterProvider,$locationProvider){
    $urlRouterProvider.otherwise("/home");
    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "app/views/room.html",
        controller: 'roomName',
        controllerAs: 'roomCtrl'
      })
      .state('persons', {
        url: "/persons",
        templateUrl: "app/views/personlist.html",
        controller: 'personsList',
        controllerAs: 'personCtrl'
    }) 
    $locationProvider.hashPrefix('');
}
angular.element(function () {
    angular.bootstrap(document.body, ['myApp']);
});
        


