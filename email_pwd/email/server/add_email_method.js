if (Meteor.isServer) {
    Meteor.methods({
        addEmail: function(user) {
            check(user,{
                email: String,
                userId: String
            });
            var userFind = Meteor.users.findOne({
                _id: user.userId
            });
            if(userFind.emails.length > 5){
                throw new Meteor.Error(403, "Max emails limit");
            }
            if (!user) {
                throw new Meteor.Error(403, "User not found");
            } else {
                var newEmail = {
                    address: user.email,
                    verified: false
                };
                Meteor.users.update(userFind._id, {
                    $addToSet: {
                        emails: newEmail
                    }
                });
            }
        }
    });
}
