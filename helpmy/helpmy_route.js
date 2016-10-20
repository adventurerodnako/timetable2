FlowRouter.route('/helpmy', {
    name: 'helpmy',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'helpmy'
        });
    }
});