Meteor.publish("singleUser", function(id){
    check(id, String);
    return Meteor.users.find(id);
});
