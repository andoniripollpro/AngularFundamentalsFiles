'use strict';

describe('GravatarUrlBuilderSpec', function () {

    beforeEach(module('eventsApp'));

    it ('should be return correct gravatar URL', inject(function(gravatarUrlBuilder) {
        //Arrange

        //Act
        var actualGravatar = gravatarUrlBuilder.buildGravatarUrl("andoni.ripoll@gmail.com");

        //Arrange
        expect(actualGravatar).toBe('http://www.gravatar.com/avatar/d09793b6d730b3cfab96834a98e075b2.jpg?s=200&r=g');
    }))
} );