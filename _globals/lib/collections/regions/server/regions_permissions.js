if (Meteor.isServer) {
    Meteor.startup(function() {
        Regions.permit('insert', 'remove', 'update').ifHasRole('admin').allowInClientCode();
    });
}
