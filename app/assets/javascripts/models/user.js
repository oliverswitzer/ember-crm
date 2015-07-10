App.User = Ember.Object.extend({
    firstName: 'Bob',
    lastName: 'Dole',
    isHuman: true,
    temperature: 98.6,
    weight: 300,
    favoriteDirector: 'Tarantino',
    fullName: function() {
        return this.get('firstName') + ' ' + this.get('lastName')
    }.property('firstName', 'lastName'),
    weightChanged: function() {
        if (this.get('weight') > 400) alert('yikes')
    }.observes('weight')
})