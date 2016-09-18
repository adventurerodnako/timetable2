if (Meteor.isServer) {
    Meteor.methods({
        addEmail: function(user) {
            var userFind = Meteor.users.findOne({
                _id: user.userId
            });
            if (userFind.emails) {
                if (userFind.emails.length > 5) {
                    throw new Meteor.Error(403, "Max emails limit");
                }
                for (var i = 0; i < userFind.emails.length; i++) {
                    if(userFind.emails[i].address === user.email){
                        throw new Meteor.Error(403, "Email already exists.");
                    }
                }
                Accounts.addEmail(user.userId, user.email);
                Meteor.call("resendVerificationLink", user.email, function(error, result) {
                    if (error) {
                        console.log("error", error);
                    } else {
                        console.log("email resend");
                    }
                });
            } else {
                var newEmail = [{
                    address: user.email,
                    verified: false
                }];
                Meteor.users.update(user.userId, {
                    $set: {
                        emails: newEmail
                    }
                });
                Meteor.call("resendVerificationLink", user.email, function(error, result) {
                    if (error) {
                        console.log("error", error);
                    } else {
                        console.log("email resend");
                    }
                });
            }
        }
    });
}
