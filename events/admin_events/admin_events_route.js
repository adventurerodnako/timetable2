// Admin events
FlowRouter.route('/admin_events', {
    name: 'admin_events',
    action: function() {
        BlazeLayout.render('layout', {content: 'admin_events'});
    }
});
