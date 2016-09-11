Template.resendVerificationEmail.events({
    "submit form": function(event, template){
        event.preventDefault();

        var email = template.find('[name="email"]').value;

        Meteor.call("resendVerificationLink", email, function(error, result){
            if(error){
                console.log("error", error);
                if(error.reason === 'Internal server error'){
                    Bert.alert('Нет связи с почтовым сервером', 'danger', 'fixed-bottom');
                }
                if(error.reason === 'User not found'){
                    Bert.alert('Пользователь не найден', 'danger', 'fixed-bottom');
                }
                if(error.reason === 'Alredy verified'){
                    Bert.alert('Почтовый адрес уже подтвержден', 'danger', 'fixed-bottom');
                }
            } else {
                Bert.alert('Новое письмо было вам отправлено. Если письмо не отображается во входящих, то проверьте папку со спамом.',
                            'success', 'fixed-bottom');
                console.log("email resend");
            }
        });

    }
});

Template.resendVerificationEmail.onRendered(function(){
    $("#resendVerificationEmailForm").validate({
        rules: {
            email:{
                email: true,
                required: true,
                maxlength: 250
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста введите корректный email",
                maxlength: "email должен быть максимум 250 символов"
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        }
    });
});
