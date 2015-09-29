(function (){
	



	var a = angular.module('App.Services', []);


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

            getStuff: function () {

                // if an id is passed in then use it when querying
                // stuff data
                var settings = {
                    method: 'GET',
                    url: baseURL + 'classes/stuff/',
                    headers: authenticationHeaders,
                };

                // $http returns a promise, which has a then function,
                // which also returns a promise
                return $http(settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('getStuff', response);
                        return response.data.results;
                    });
            }
        }
	}); 

})();
