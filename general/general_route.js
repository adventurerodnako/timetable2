FlowRouter.route('/', {
    name: 'general',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'general'
        });
    }
});
