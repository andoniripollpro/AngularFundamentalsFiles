'use strict';

eventsApp.factory('eventData', function ($resource, $http){
    var resource = $resource('/Ex3_MvcJavascript/Event/Get/:id', {id: '@id'}, {query: {method: 'GET',  params: {}, isArray:true}});
    return {
        getEvent: function(eventId) {
            return resource.get({id:eventId});
            //return $http({method: 'GET', url: 'http://localhost/Ex3_MvcJavascript/Event/Get/45'});
        },
        save: function(event){
            event.id = 999;
            return resource.save(event);
        },
        getAllEvents: function() {
            return  [
                {'name': 'Angular Boot Camp', 'id': 1},
                {"id":2,"creator":"jmcooper","name":"Code Camp","date":"03/15/2013","time":"9:00am - 5:00pm","location":{"address":"123 Wall St","city":"New York","province":"NY"},"imageUrl":"http://blog.laptopmag.com/wpress/wp-content/uploads/2012/08/Code-Camp_sf.jpg","sessions":[{"id":1,"upVoteCount":0,"creator":"jmcooper","name":"How To Program","track":"DevOps","duration":1,"abstract":"this session will teach you to program","creatorName":"Jim Cooper","level":"advanced"},{"id":2,"upVoteCount":0,"creator":"jmcooper","name":"How To Dance","track":"Web","duration":4,"abstract":"this session will teach you to dance","creatorName":"Jim Cooper","level":"introductory"},{"id":3,"upVoteCount":0,"creator":"bob","name":"How To Sing","track":"DevOps","duration":1,"abstract":"this session will teach you to sing  Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum  Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum  Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum Lorum Ipsum FooBarsum ","level":"advanced","creatorName":"Bob"},{"duration":2,"name":"How To Be Awesome","abstract":"this course will make me rich","creator":"bob","creatorName":"Bob","id":4,"upVoteCount":0,"track":"Web","level":"introductory"},{"duration":2,"track":"Web","name":"How to build Angular Applications","abstract":"This session is all about angular applications","creator":"bob","creatorName":"Bob","upVoteCount":0,"id":5,"level":"intermediate"}]},
                {"id":3,"creator":"joeeames","name":"Code Retreat","date":"03/16/2013","time":"8:00am - 4:30pm","location":{"address":"42 Wallaby Way","city":"Sydney","province":"AU"},"imageUrl":"http://api.ning.com/files/2vzV35vB8k5SPm92v9bGA0ng9DP2h-ONIcgPoDUThiIk1roHMF4eVjzlN2o3z9S5aU*wKgn9jZpdxEekNQCYvnOumr-beV44/cnlogo.png"},
                {"name":"fall code camp","date":"1/1/2010","time":"10am","location":{"address":"123 fake st","city":"riverton","province":"ut"},"imageUrl":"http://s3.favim.com/orig/39/funny-llama-lol-nonsense-pink-Favim.com-325386.jpg","creator":"jmcooper","id":4},
                {"name":"fall code camp","date":"1/1/2010","time":"10am","location":{"address":"123 fake st","city":"riverton","province":"ut"},"imageUrl":"http://s3.favim.com/orig/39/funny-llama-lol-nonsense-pink-Favim.com-325386.jpg","creator":"jmcooper","id":4}
                    ];
            //return $http({method: 'GET', url: 'http://localhost/data/event/*.json'});
        },
        getAuthor: function(authorId) {
            var author = {
                courseAutrhorname: 'Unkmown',
                textAndEveryThing: 'Unknown text'
                }
            return author;
        }
    };
});