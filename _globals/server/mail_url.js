Meteor.startup(function() {
    process.env.MAIL_URL = "smtp://postmaster%40sandbox2b6ea22a7f90413eaf23ce2b389e4f8a.mailgun.org:e93d6ca7f08781e5f1d1810b3996c9b6@smtp.mailgun.org:587";
    // console.log(process.env);
});
