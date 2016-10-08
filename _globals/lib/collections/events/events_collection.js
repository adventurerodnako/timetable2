global.Events = new Mongo.Collection("events");

var EventsSchema = new SimpleSchema({
    title:{
        type: String,
        label: 'Заголовок события',
        autoform:{
            label: false,
            placeholder: 'Заголовок события'
        }
    },
    description: {
        type: String,
        optional: true,
        label: "О себе"
    },
    start: {
        type: Date,
        optional: true,
        label: "Начало события"
    },
    end: {
        type: Date,
        optional: true,
        label: "Окончание события"
    },
    coast:{
        type: Number,
        optional: true,
        label: 'Стоимость'
    },
    ownerId:{
        type: String,
        autoform: {
            type: "hidden"
        }
    }
});

Events.attachSchema(EventsSchema);
