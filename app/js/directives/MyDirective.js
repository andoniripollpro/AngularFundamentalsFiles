'use strict';

eventsApp.directive('myDirective', function($compile) {
    return {
        restrict: 'A',
        template: "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>",
        scope: {
            event: "=" /* "=event" */
        }
        //link: function(scope, element, attrs, controller) {
        //    var markup = "<input type='text' ng-model='sampleData' /> {{sampleData}} <br/>";
        //    angular.element(element).html($compile(markup)(scope));
        //}
    }
});