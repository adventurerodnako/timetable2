Meteor.startup(function() {
    process.env.MAIL_URL = Meteor.settings.private.mail_url;
    // console.log(process.env);
});
