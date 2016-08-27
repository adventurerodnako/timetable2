// fogotPassword
FlowRouter.route('/fogotPassword', {
    name: 'fogotPassword',
    action: function() {
        BlazeLayout.render('layout', {content: 'fogotPassword'});
    }
});

// resendVerificationEmail
FlowRouter.route('/resendVerificationEmail', {
    name: 'resendVerificationEmail',
    action: function() {
        BlazeLayout.render('layout', {content: 'resendVerificationEmail'});
    }
});

// sign-in
FlowRouter.route('/sign-in', {
    name: 'signin',
    action: function() {
        BlazeLayout.render('layout', {content: 'signin'});
    }
});

// sign-up
FlowRouter.route('/sign-up', {
    name: 'signup',
    action: function() {
        BlazeLayout.render('layout', {content: 'signup'});
    }
});

// verify-email
FlowRouter.route('/verify-email/:token',{
    name: 'verify-email',
    action: function(params) {
        Accounts.verifyEmail(params.token, function(error){
            if(error){
                Bert.alert(error.reason, 'danger', 'growl-top-right');
            } else {
                FlowRouter.go('/');
                Bert.alert('Почтовый адрес подтвержден! Спасибо!', 'success', 'growl-top-right');
            }
        });
    }
});
