FlowRouter.route('/sign-up', {
    name: 'signup',
    action: function() {
        BlazeLayout.render('layout', {content: 'signup'});
    }
});
