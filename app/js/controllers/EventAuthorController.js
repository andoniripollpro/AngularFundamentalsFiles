'use strict';

eventsApp.controller('EventAuthorController',
    function ($scope, eventData, $log, $routeParams) {
        $scope.author = eventData.getAuthor($routeParams.authorId);
        $scope.author.textAndEveryThing = $scope.author.textAndEveryThing
            + ' nor cover letter.';
        $scope.dontClick = function () {
            alert('Dont click me');
        }
    }
)