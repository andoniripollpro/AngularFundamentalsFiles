'use strict';

var eventsApp = angular.module('eventsApp', ['ngSanitize', 'ngResource', 'ngRoute'])
    .config(function($routeProvider, $locationProvider) {
        $routeProvider.when('/newEvent',
            {
                templateUrl: '/templates/NewEvent.html' ,
                controller: 'MyDirectiveController'
            });
        $routeProvider.when('/events',
            {
                templateUrl: '/templates/EventList.html' ,
                controller: 'EventListController'
            });
        $routeProvider.when('/event/:eventId',
            {
                templateUrl: '/templates/EventDetails.html' ,
                controller: 'EventController'
            });
        $routeProvider.when('/editProfile',
            {
                templateUrl: '/templates/EditProfile.html' ,
                controller: 'EditProfileController'
            });
        $routeProvider.when('/myDirective',
            {
                templateUrl: '/templates/MyDirective.html',
                controller: 'MyDirectiveController'
            });
        $routeProvider.when('/eventAuthor/:authorId',
            {
                templateUrl: '/templates/eventAuthor.html',
                controller: 'EventAuthorController'
            });
        $routeProvider.when('/about',
            {
                template: '<h1>About this exercise</h1><hr /><p>This is my exercise to learn Angularjs which is coooool!!!</p>'
            });

        $routeProvider.otherwise({redirectTo: '/events'});
        //$locationProvider.html5Mode(true);
    })


