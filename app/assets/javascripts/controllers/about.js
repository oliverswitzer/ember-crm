App.AboutController = Ember.Controller.extend(App.Excited, {
    fooProperty: "this is foo property",
    someFunction: function() { alert("FOO BAR") },
    init: function() {
        this._super();
        console.log("Controller called")
    }
})