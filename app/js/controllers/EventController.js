'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData, $log, $routeParams) {
        $scope.sortorder = 'name';
        $scope.event = eventData.getEvent($routeParams.eventId)
            .$promise
            .then(function(event) { $scope.event = event; })
            .catch(function (data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });

        //For Angula Controller and Markup
        $scope.snippet = '<span style="color:red">hi friend</span>';
        $scope.buttonDisabled = true;
        $scope.valueBool = true;
        $scope.mystyle = {color:'red'};
        $scope.event = eventData.event;

        $scope.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        $scope.downVoteSession = function (session) {
            session.upVoteCount--;
        };
    }
);