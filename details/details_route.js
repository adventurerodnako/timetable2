FlowRouter.route('/profile/details', {
    name: 'details',
    // subscriptions: function(params) {
    //     this.register('currentUser',
    //         Meteor.subscribe('singleUser', Meteor.userId()));
    // },
    action: function() {
        BlazeLayout.render('layout', {
            content: 'details'
        });
    }
});
