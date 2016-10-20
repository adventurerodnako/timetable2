FlowRouter.route('/feedback', {
    name: 'feedback',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'feedback'
        });
    }
});