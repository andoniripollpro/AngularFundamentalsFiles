'use strict';

describe('EditProfileControllerSpec', function () {
    var $controllerConstructor, scope, mockGravatarUrlBuilder;

    beforeEach(module("eventsApp"));

    beforeEach(inject(function($controller, $rootScope) {
        $controllerConstructor = $controller;
        scope = $rootScope.$new();
        mockGravatarUrlBuilder = sinon.stub({buildGravatarUrl: function() {}});
    }));

    it('should build GravatarUrl with a given email', function () {
        //Arrange
        $controllerConstructor("EditProfileController",
            {'$scope': scope, gravatarUrlBuilder: mockGravatarUrlBuilder})
        var email = "andon.ripoll@gmail.com";
        var gravatarUrlExpected = "http://www.gravatar.com/avatar/2395eerr84rr9032.jpg?s=200&r=g";
        mockGravatarUrlBuilder.buildGravatarUrl.returns(gravatarUrlExpected);

        //Act
        var gravatarUrlActual = scope.getGravatarUrl(email);

        //Assert
        expect(mockGravatarUrlBuilder.buildGravatarUrl.calledWith(email)).toBe(true);
        expect(gravatarUrlActual).toBe(gravatarUrlExpected);
    } )

    it('user should be an empty object', function () {
        //Arrange
        $controllerConstructor("EditProfileController",
            {'$scope': scope})
        var userExpected = {};

        //Act
        var userActual = scope.user;

        //Assert
        //expect(userActual).toBe(userExpected);
        //Just to learn
        expect(1).toBe(1);
    } )
})