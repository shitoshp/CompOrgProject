(function () {
    
    var a = angular.module('app', ['ionic', 'App.Services']);  //creating app by angular
/*.controller("controller-one", function($scope){
    
	//Private since not attached to scope
	var privateVar = "Can't see this";

	//Accesible to view since it is attached to scope
    $scope.myVariable = "I can see you";

    $scope.items = ['lol',
    			    '2nd item'];*/


//new controller


        




        a.controller('AppCtrl', function ($scope, ParseHttpService) {

	       $scope.stuffList = {};

            ParseHttpService.login().then(function(){

            });

            $scope.handleButtonClick = function() {
                ParseHttpService.getStuff().then(function (_data) {
                    $scope.stuffList = _data;
                }); 
            }

	

        });	

})();



