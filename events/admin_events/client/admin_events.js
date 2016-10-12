Template.addEvent.onRendered(function() {
    $('.add-event-wizard').bootstrapWizard({
        onTabShow: function(tab, navigation, index) {
            var $total = navigation.find('li').length;
            var $current = index + 1;
            var $percent = ($current / $total) * 100;
            $('.add-event-wizard .progress-bar').css({
                width: $percent + '%'
            });
            if ($current === $total) {
                $('.add-event-wizard').find('.pager .next').hide();
                $('.add-event-wizard').find('.pager .finish').show();
                $('.add-event-wizard').find('.pager .finish').removeClass('disabled');
            } else {
                $('.add-event-wizard').find('.pager .finish').hide();
                $('.add-event-wizard').find('.pager .next').show();
            }
        }
    });
    $('.text-color').colorpicker();
    $('.background-color').colorpicker();
    $('.datetimepicker').datetimepicker({
        locale: 'ru',
        format: 'DD.MM.YYYY'
    });
    $('.timepicker').datetimepicker({
        locale: 'ru',
        format: 'hh:mm'
    });
    $('.froala-editor').froalaEditor({
        placeholderText: 'Описание мероприятия',
        heightMin: 80
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
