Template.profile.events({
    'change input[type=file]': function(e, t) {
        var files = e.currentTarget.files;

        Resizer.resize(files[0], {
            width: 300,
            height: 300,
            cropSquare: true
        }, function(err, file) {

            var uploader = new Slingshot.Upload("myFileUploads");

            uploader.send(file, function(err, downloadUrl) {
                if (err)
                    console.log(err);

                console.log(downloadUrl);

            });

        });

    }
});
