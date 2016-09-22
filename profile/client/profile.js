Template.profile.events({
    'change input[type=file]': function(e, t) {
        var files = e.currentTarget.files;

        Resizer.resize(files[0], {
            width: 64,
            height: 64,
            cropSquare: true
        }, function(err, file) {

            var uploader = new Slingshot.Upload("myFileUploads");

            uploader.send(file, function(err, downloadUrl) {
                if (err)
                    console.log(err);

                console.log("save image " + downloadUrl);

                Meteor.call("saveUrlImage", downloadUrl, function (error, result) {
                    if (error) {
                        console.log(error);
                        Bert.alert(error.reason, 'danger', 'fixed-bottom');
                    }
                });
            });
        });
    }
});
