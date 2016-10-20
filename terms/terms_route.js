FlowRouter.route('/terms', {
    name: 'terms',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'terms'
        });
    }
});