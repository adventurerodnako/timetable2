FlowRouter.route('/profile', {
    name: 'profile',
    subscriptions: function(params) {
        this.register('currentUser',
            Meteor.subscribe('singleUser', Meteor.userId()));
    },
    action: function() {
        BlazeLayout.render('layout', {
            content: 'profile'
        });
    }
});
