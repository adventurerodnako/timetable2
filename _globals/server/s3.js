Slingshot.createDirective("myFileUploads", Slingshot.S3Storage, {
    bucket: "timetable777",
    region: "eu-central-1",
    AWSAccessKeyId: "AKIAJ52HU6A55DHRL63Q",
    AWSSecretAccessKey: "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",

    acl: "public-read",

    authorize: function() {
        //Deny uploads if user is not logged in.
        return true;
    },

    key: function(file) {
        //Store file into a directory by the user's username.
        return new Date().getTime() + "_" + file.name;
    }
});
