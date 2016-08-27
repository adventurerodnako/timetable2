if(Meteor.isServer){
    Meteor.methods({
        sendVerificationLink: function(){
             var userId = Meteor.userId();
             if (userId) {
                 return Accounts.sendVerificationEmail(userId);
             }
        },
        resendVerificationLink: function(email) {
            check(email, String);
            var user = Meteor.users.findOne({"emails.address": email});

            if(!user){
                throw new Meteor.Error(403, "User not found");
            }

            try {
                return Accounts.sendVerificationEmail(user._id);
            } catch (error){
                throw new Meteor.Error(403, "Alredy verified");
            }
        }
    });
}
