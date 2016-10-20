FlowRouter.route('/privacy', {
    name: 'privacy',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'privacy'
        });
    }
});