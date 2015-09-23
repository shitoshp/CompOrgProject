
var a = angular.module('app', ['ionic']);  //creating app by angular
/*.controller("controller-one", function($scope){
    
	//Private since not attached to scope
	var privateVar = "Can't see this";

	//Accesible to view since it is attached to scope
    $scope.myVariable = "I can see you";

    $scope.items = ['lol',
    			    '2nd item'];*/


//new controller


        
a.service('ParseHttpService', function ($http) {
        
		var baseURL = "https://api.parse.com/1/";
        var authenticationHeaders = {
        "x-parse-application-id": "jYWwyHcSTkapjexeYxmYFJd5MpOGKReBvE3zZJUG",
        "x-parse-rest-api-key": "DkB9Sm1KWoatEdcCxmmV3zCEa4xrdVogXuFcH25i"
    	};

        return {
            /**
             * [[Description]]
             * @returns {Promise} [[Description]]
             */
            login: function () {

                var credentials = {
                    "username": "admin",
                    "password": "test"
                };

                var settings = {
                    method: 'GET',
                    url: baseURL + 'login',
                    headers: authenticationHeaders,
                    // params are for query string parameters
                    params: credentials
                };

                // $http returns a promise, which has a then function,
                // which also returns a promise
                return $http(settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('login', response);
                        return response.data;
                    });
            },

            getStuff: function (_id) {

                // if an id is passed in then use it when querying
                // stuff data
                var settings = {
                    method: 'GET',
                    url: baseURL + 'classes/stuff/' + _id,
                    headers: authenticationHeaders,
                };

                // $http returns a promise, which has a then function,
                // which also returns a promise
                return $http(settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('getStuff', response);
                        return response.data;
                    });
            }
        };
}); 




a.controller('AppCtrl', function ($scope, ParseHttpService) {

	 $scope.currentUser = null;
        $scope.apiResponseData = {};
        $scope.uiData = {};

        function _alertHandler(_error) {
            alert("ERROR " + JSON.stringify(_error, null, 2));
        }
        /**
         * logs the user into the application
         */
        $scope.doLogin = function () {
            return ParseHttpService.login().then(function (_response) {
                $scope.currentUser = _response;
                $scope.apiResponseData = _response;
            }, _alertHandler);
        };

        /**
         * [[Description]]
         * @returns {[[Type]]} [[Description]]
         */

        $scope.getStuffList = function () {
            return ParseHttpService.getStuff("").then(function (_response) {
                $scope.apiResponseData = _response;
            }, _alertHandler);
        }; 

});	



