
var a = angular.module('app', ['ionic']);  //creating app by angular
/*.controller("controller-one", function($scope){
    
	//Private since not attached to scope
	var privateVar = "Can't see this";

	//Accesible to view since it is attached to scope
    $scope.myVariable = "I can see you";

    $scope.items = ['lol',
    			    '2nd item'];*/


//new controller


        
a.service('ParseHttpService', function ($q) {
        
		var stuffList = [];
        stuffList.push({
            "hero": "Storm Spirit",
            "type": "Int"
        });
        stuffList.push({
            "hero": "Faceless Void",
            "type": "Agility"
        });
        stuffList.push({
            "hero": "Puck",
            "type": "Int"
        });
        stuffList.push({
            "hero": "Axe",
            "type": "Strength"
        });
        


        return {
       	/**
            * returns all of the data
            */
            getAllItems: function () {
                var deferred = $q.defer();
                setTimeout(function () {
                    deferred.resolve(stuffList);
                }, 500);
                return deferred.promise;
            }
            /**
            * Gets item by specific id
            * @param   {Number}  _itemId index in the array
            * @returns {Promise}
            */
            

        };
        

}); 




a.controller('AppCtrl', function ($scope, ParseHttpService) {

	$scope.stuffList = [];

	ParseHttpService.getAllItems().then(function (_data) {
        $scope.stuffList = _data;
    });
});	



