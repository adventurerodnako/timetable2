# address options methods
if Meteor.isServer
    Meteor.methods
        getOptionsRelated: (options) ->
            @unblock()
            placesResult = []
            searchText = options.searchText
            values = options.values

            Meteor.wrapAsync (callback) ->
                Meteor.setTimeout ->
                    callback()
                , 1000

            if searchText
                Places.find({name: {$regex: searchText}}, {limit: 5}).forEach (place) ->
                    rayon = Places.findOne({place_id: place.parent_place_id})
                    region = Regions.findOne({place_id: place.region_place_id})
                    # if place not have rayon
                    if place.parent_place_id is place.region_place_id
                        placeTypeName = PlaceTypeNames.findOne({place_type_name_id: place.place_type_name_id})
                        regionTypeName = PlaceTypeNames.findOne({place_type_name_id: region.place_type_name_id})
                        placesResult.push {label: place.name + " " + placeTypeName.name + ". - " + region.name + " " + regionTypeName.name + ".", value: place.place_id}
                    # if place have rayon
                    else
                        placeTypeName = PlaceTypeNames.findOne({place_type_name_id: place.place_type_name_id})
                        rayonTypeName = PlaceTypeNames.findOne({place_type_name_id: rayon.place_type_name_id})
                        regionTypeName = PlaceTypeNames.findOne({place_type_name_id: region.place_type_name_id})
                        placesResult.push {label: place.name + " " + placeTypeName.name + ". - " + rayon.name + " " + rayonTypeName.name + ". - " + region.name + " " + regionTypeName.name + ".", value: place.place_id}
                return placesResult

            else if values.length
                Places.find({place_id: {$in: values}}).forEach (place) ->
                    rayon = Places.findOne({place_id: place.parent_place_id})
                    region = Regions.findOne({place_id: place.region_place_id})
                    # if place not have rayon
                    if place.parent_place_id is place.region_place_id
                        placeTypeName = PlaceTypeNames.findOne({place_type_name_id: place.place_type_name_id})
                        regionTypeName = PlaceTypeNames.findOne({place_type_name_id: region.place_type_name_id})
                        placesResult.push {label: place.name + " " + placeTypeName.name + ". - " + region.name + " " + regionTypeName.name + ".", value: place.place_id}
                    # if place have rayon
                    else
                        placeTypeName = PlaceTypeNames.findOne({place_type_name_id: place.place_type_name_id})
                        rayonTypeName = PlaceTypeNames.findOne({place_type_name_id: rayon.place_type_name_id})
                        regionTypeName = PlaceTypeNames.findOne({place_type_name_id: region.place_type_name_id})
                        placesResult.push {label: place.name + " " + placeTypeName.name + ". - " + rayon.name + " " + rayonTypeName.name + ". - " + region.name + " " + regionTypeName.name + ".", value: place.place_id}
                return placesResult

            return placesResult
