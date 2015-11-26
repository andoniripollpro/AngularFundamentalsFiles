'use strict';

describe('event registration app', function() {

    describe('events page', function() {
        beforeEach(function() {
            browser.get('http://localhost/#/events/');
        });

        it('should have the correct title and first event', function() {
            //Arrange
            var list = element.all(by.repeater('event in events'));
            var titleElement = element(by.binding('event.name'));

            //Assert
            expect(list.count()).toEqual(5);
            expect(titleElement.getText()).toEqual('Angular Boot Camp');
        })
    });

    describe('event details page', function() {
        beforeEach(function () {
            browser.get('http://localhost/#/event/1');
        });

        it('should sort by name', function() {
            var list = element.all(by.repeater('session in event.sessions'));
            var titleElement = list.first().element(by.binding('session.name'));
            expect(titleElement.getText()).toEqual('Directives Masterclass');
        });

        it('should have 3 sessions', function() {
            var list = element.all(by.repeater('session in event.sessions'));
            expect(list.count()).toEqual(3);
        });

        it('should have 1 session when Introductory is chosen', function() {
            var selectE1 = element(by.model('query.level'));
            selectE1.element(by.cssContainingText('option', 'Introductory')).click();
            var list = element.all(by.repeater('session in event.session'));
            expect(list.count()).toEqual(1);
        })

    });
});
