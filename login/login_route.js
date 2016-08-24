FlowRouter.route('/sign-up', {
    name: 'sign-up',
    action: function() {
        BlazeLayout.render('layout', {content: 'sign-up'});
    }
});
