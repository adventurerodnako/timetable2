FlowRouter.route('/events_filter_easy', {
    name: 'events_filter_easy',
    action: function() {
        BlazeLayout.render('layout', {
            content: 'events_filter_easy'
        });
    }
});
