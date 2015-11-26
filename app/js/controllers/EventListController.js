'use strict';

eventsApp.controller('EventListController',
    function EventListController($scope, eventData, $log, $routeParams) {
        $scope.sortorder = 'name';
        $scope.events = eventData.getAllEvents();
        /*
            .$promise
            .then(function(events) { $scope.events = events; })
            .catch(function (data, status, headers, config) {
                $log.warn(data, status, headers(), config);
            });
        */
    }
);