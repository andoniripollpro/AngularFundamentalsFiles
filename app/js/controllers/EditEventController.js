'use strict';

eventsApp.controller('EditEventController',
    function EditEventController($scope, eventData) {
        $scope.saveEvent = function(event, newEventForm) {
            if(newEventForm.$valid) {
                eventData.save(event)
                    .$promise
                    .then(function (response) { window.alert('Event ' + event.name + ' saved! Oh really?') })
                    .catch(function (response) { console.log('Failure', response) } );
            }
            else
            {
                window.alert('You have errors to solve');
            }
        }

        $scope.cancelEvent = function() {
            window.location = "../../templates/EventDetails.html";
        }

    }
)