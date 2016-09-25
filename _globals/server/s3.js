Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
    bucket: Meteor.settings.private.aws.bucket,
    region: Meteor.settings.private.aws.region,
    AWSAccessKeyId: Meteor.settings.private.aws.AWSAccessKeyId,
    AWSSecretAccessKey: Meteor.settings.private.aws.AWSSecretAccessKey,

    acl: "public-read",

    authorize: function() {
        //Deny uploads if user is not logged in.
        if (!Meteor.userId()) {
          var message = "Please login before posting files";
          throw new Meteor.Error("Login Required", message);
        }
        return true;
    },

    key: function(file) {
        //Store file into a directory by the user's username.
        return new Date().getTime() + "_" + file.name;
    }
});
