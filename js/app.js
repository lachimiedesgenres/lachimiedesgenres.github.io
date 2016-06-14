$(function() {

    //Set up instafeed
    var feed = new Instafeed({
        target: 'instafeed',
        get: 'user',
        userId: 1798545780,
        accessToken: '1798545780.1677ed0.de06e8e6f3f647a39b12a73637675d33',
        useHttp: true,
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a></div><div class="date">{{model.date}}</div></div></div>'
    });
    feed.run();

})
