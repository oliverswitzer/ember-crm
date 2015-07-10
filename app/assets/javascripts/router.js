// For more information see: http://emberjs.com/guides/routing/

App.Router.map(function() {
    rootURL: '/some/path',
    this.resource('posts', { path: '/posts' }, function() {
        this.route('new', { path: '/new' });
    })
});
