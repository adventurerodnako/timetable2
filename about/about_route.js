FlowRouter.route('/about', {
    name: 'about',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'about'
        });
    }
});