/**
 * Created by shitosh parajuli on 10/1/2015.
 */
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
             * function for logging in
             * @returns {Promise}
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
                return $http.get(baseURL + 'login', settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('login', response);
                        return response.data;
                    });
            },

            getStuff: function (_id) {


                var settings = {
                    method: 'GET',
                    url: baseURL + 'classes/stuff/',
                    headers: authenticationHeaders,
                };


                return $http.get(settings.url, settings)
                    .then(function (response) {
                        // In the response resp.data contains the result
                        // check the console to see all of the data returned
                        console.log('getStuff', response);
                        return response.data.results;
                    });
            },

            getStuffbyid: function (_id) {


                var settings = {
                    method: 'GET',
                    url: baseURL + 'classes/stuff/',
                    headers: authenticationHeaders,
                };


                return $http.get(settings.url + _id, settings)
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
