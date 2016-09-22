if (Meteor.isServer) {
    Meteor.methods({
        delUrlImage: function(url) {
            check(url, String);
            check(Meteor.userId(), String);

            AWS.config.update({
                accessKeyId: "AKIAJ52HU6A55DHRL63Q",
                secretAccessKey: "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"
            });

            var split = url.split("/");

            var s3 = new AWS.S3();

            var params = {
                Bucket: "timetable777",
                Key: split[split.length - 1]
            };

            var deleteObject = Meteor.wrapAsync(
                s3.deleteObject(params, function(error, data) {
                    if (error) {
                        console.log(error);
                        throw new Meteor.Error(error);
                    } else {
                        console.log(data);
                    }
                })
            );
        }
    });
}
