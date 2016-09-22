if (Meteor.isServer) {
    Meteor.methods({
        saveUrlImage: function(url) {
            check(url, String);
            check(Meteor.userId(), String);
            if(url){
                if (Meteor.user().profile.profileImageUrl) {
                    Meteor.call("delUrlImage", Meteor.user().profile.profileImageUrl, function (error, result) {
                        if (error) {
                            console.log(error);
                        }else{
                            console.log("image deleted - " + Meteor.user().profile.profileImageUrl);
                            Meteor.users.update(Meteor.userId(), {
                                $set: {
                                    "profile.profileImageUrl": url
                                }
                            });
                        }
                    });
                }else{
                    Meteor.users.update(Meteor.userId(), {
                        $set: {
                            "profile.profileImageUrl": url
                        }
                    });
                }
            }
        }
    });
}
