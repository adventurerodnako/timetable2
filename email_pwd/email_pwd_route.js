FlowRouter.route('/profile/email_pwd', {
    name: 'emailPwd',
    subscriptions: function(params) {
        this.register('currentUser',
            Meteor.subscribe('singleUser', Meteor.userId()));
    },
    action: function() {
        BlazeLayout.render('layout', {
            content: 'emailPwd'
        });
    }
});
