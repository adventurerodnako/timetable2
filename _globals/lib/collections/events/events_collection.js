global.Events = new Mongo.Collection("events");

var EventsSchema = new SimpleSchema({
    'title':{
        type: String,
        label: 'Заголовок события',
    },
    'start':{
        type: String,
        label:'Начало события'
    },
    'end':{
        type: String,
        label: 'Окончание события'
    },
    'coast':{
        type: String,
        label: 'Стоимость'
    }
});

Events.attachSchema(EventsSchema);
