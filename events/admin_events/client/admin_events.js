Template.addEvent.helpers({
    times: function() {
        return Session.get("times");
    }
});

Template.addEvent.events({
    "click .add-item": function(event, template) {
        var arrayTimes = Session.get("times");
        arrayTimes.push({
            id: Random.id(),
            start: "",
            end: "",
            duration: ""
        });
        Session.set("times", arrayTimes)
    },
    "click .remove-item": function(e, template) {
        e.preventDefault();
        var arrayTimes = Session.get("times");
        Session.set("times", _.without(arrayTimes, _.findWhere(arrayTimes, {id: this.id})));
        console.log(this);
    }
});

Template.addEvent.onCreated(function() {
    return Session.set("times", [{
        id: Random.id(),
        start: "",
        end: "",
        duration: ""
    }]);
});

Template.addEvent.onRendered(function() {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function(e) {

        var $target = $(e.target);

        if ($target.parent().hasClass('disabled')) {
            return false;
        }
    });

    $(".next-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        $active.next().removeClass('disabled');
        nextTab($active);

    });
    $(".prev-step").click(function(e) {

        var $active = $('.wizard .nav-tabs li.active');
        prevTab($active);

    });

    function nextTab(elem) {
        $(elem).next().find('a[data-toggle="tab"]').click();
    }

    function prevTab(elem) {
        $(elem).prev().find('a[data-toggle="tab"]').click();
    }

    $('.text-color').colorpicker();
    $('.background-color').colorpicker();
    $('.datetimepicker').datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY'
    });
    $('.froala-editor').froalaEditor({
        placeholderText: 'Описание мероприятия',
        heightMin: 80
    });
});

Template.time.onRendered(function() {
    $('.timepicker').datetimepicker({
        locale: 'ru',
        format: 'hh:mm'
    });
});

Template.admin_events.onCreated(function() {
    var template = Template.instance();
    template.subscribe('events');
});

Template.admin_events.onRendered(function() {
    $('#events-calendar').fullCalendar({
        lang: 'ru',
        eventLimit: 2,
        events(start, end, timezone, callback) {

            var isPast = function(date) {
                var today = moment().format();
                return moment(today).isAfter(date);
            };

            var data = Events.find().fetch().map(function(event) {
                event.editable = !isPast(event.start);
                return event;
            });

            if (data) {
                callback(data);
            }
        },
        eventRender(event, element) {
            element.find('.fc-content').html(
                '<h4>' + event.title + '</h4><p class="coast">' + event.coast + '</p>'
            );
        },
        dayClick(date) {
            Session.set('eventModal', {
                type: 'add',
                date: date.format()
            });
            // $('#add-edit-event-modal').modal('show');
            Modal.show("addEvent");
        },
        eventClick(event) {
            Session.set('eventModal', {
                type: 'edit',
                event: event._id
            });
            // $('#add-edit-event-modal').modal('show');
        }
    });

    Tracker.autorun(function() {
        Events.find().fetch();
        $('#events-calendar').fullCalendar('refetchEvents');
    });
});

AutoForm.addHooks(['addEvent'], {
    onSuccess: function(insert, result) {
        Bert.alert('Мероприятие сохранено', 'success', 'fixed-bottom');
        console.log("User update");
    },
    onError: function(insert, error) {
        Bert.alert(error, 'danger', 'fixed-bottom');
        console.log(error);
    },
    formToDoc: function(doc) {
        if (Meteor.userId()) {
            doc.ownerId = Meteor.userId();
        }
        return doc;
    }
});
