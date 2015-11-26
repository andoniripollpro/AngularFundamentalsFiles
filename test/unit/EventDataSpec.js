'use strict';

describe('EventDataSpec', function () {
    beforeEach(module("eventsApp"));

    it('should call /Ex3_MvcJavascript/Event/Get/111 when calling get in eventData with 111',
        inject (function(eventData, $httpBackend) {
            $httpBackend.expectGET('/Ex3_MvcJavascript/Event/Get/111');
            $httpBackend.when('GET', '/Ex3_MvcJavascript/Event/Get/111').respond({});
            eventData.getEvent(111);
            $httpBackend.flush();

            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
    }));
})

