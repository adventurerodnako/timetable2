if (Meteor.isServer) {
    Meteor.startup(function() {
        Events.permit('insert', 'remove', 'update').ifLoggedIn().allowInClientCode();
    });
}
