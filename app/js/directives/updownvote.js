'use strict';

eventsApp.directive('updownvote', function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/templates/directives/updownvote.html',
        scope: {
            upvote: "&",
            downvote: "&",
            count: "="
        }
    }
})

