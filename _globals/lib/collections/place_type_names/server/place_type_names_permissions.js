if (Meteor.isServer) {
    Meteor.startup(function() {
        PlaceTypeNames.permit('insert', 'remove', 'update').ifHasRole('admin').allowInClientCode();
    });
}
