Template.signup.events({
    'submit form': function(event,template) {
        event.preventDefault();

        var user = {
            email: template.find('[name="email"]').value,
            password: template.find('[name="password"]').value
        };

        Accounts.createUser(user, function(error){
             if (error) {
                 Bert.alert(error.reason, 'danger', 'growl-top-right');
                 console.log("error", error);
             } else {
                Meteor.call("sendVerificationLink", function(error, result){
                    if(error){
                        Bert.alert(error.reason, 'danger', 'growl-top-right');
                        console.log("error", error);
                    } else {
                        Bert.alert('Регистрация прошла успешно! Пожалуйста, проверьте свою электронную почту и следуйте инструкциям.',
                                    'success', 'growl-top-right');
                        console.log("user create");
                    }
                });
             }
        });
    }
});

Template.signup.onRendered(function(){
    $("#signupForm").validate({
        rules: {
            email:{
                email: true,
                required: true,
                maxlength: 250
            },
            password:{
                required: true,
                minlength: 6,
                maxlength: 250
            },
            confirm_password: {
                required: true,
                minlength: 6,
                maxlength: 250,
                equalTo: "#password"
            }
        },
        messages: {
            email: {
                required: "Это поле обязательно для заполнения",
                email: "Пожалуйста введите корректный email",
                maxlength: "email должен быть максимум 250 символов"
            },
            password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов"
            },
            confirm_password: {
                required: "Это поле обязательно для заполнения",
                minlength: "Пароль должен быть минимум 6 символов",
                maxlength: "Пароль должен быть максимум 250 символов",
                equalTo: "Пожалуйста, введите тот же пароль, что и выше"
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
