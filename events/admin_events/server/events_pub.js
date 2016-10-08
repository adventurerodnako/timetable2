Meteor.publish("events", function(){
    return Events.find({ownerId: this.userId});
});
