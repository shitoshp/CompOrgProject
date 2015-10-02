/**
 * Created by shitosh parajuli on 10/1/2015.
 */
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

        function populateList() {
            return ParseHttpService.getStuff()
        }

        console.log('Start')

        ParseHttpService.login().then(function loginSuccess(_loggedIn) {
            alert(_loggedIn.username + " logged in");

                $scope.handleButtonClick = function() {
                    populateList().then(function (_data) {
                        $scope.stuffList = _data;
                    });
                }
        },
            function error(_error) {
                alert("Error" + _error);
        });







    });

})();



