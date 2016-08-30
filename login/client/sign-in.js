Template.signin.events({
    'submit form': function(event,template) {
        event.preventDefault();

        var user = {
            email: template.find('[name="email"]').value,
            password: template.find('[name="password"]').value
        };

        Meteor.loginWithPassword(user.email, user.password, function(error){
            if(error){
                console.log("error", error);
                if(error.reason === "User not found"){
                    Bert.alert('Пользователь не найден!', 'danger', 'growl-top-right');
                }
                if(error.reason === "Incorrect password"){
                    Bert.alert('Вы ввели неверный пароль!', 'danger', 'growl-top-right');
                }
            } else {
                console.log('User sign in');
                FlowRouter.go('general');
            }
        });
    }
});

Template.signin.events({
    'click #facebook-login': function(event) {
        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                throw new Meteor.Error("Facebook login failed");
            }
        });
    },
    'click #twitter-login': function(event) {
        Meteor.loginWithTwitter({}, function(err){
            if (err) {
                throw new Meteor.Error("Twitter login failed");
            }
        });
    },
    'click #google-login': function(event) {
        Meteor.loginWithGoogle({}, function(err){
            if (err) {
                throw new Meteor.Error("Google login failed");
            }
        });
    }
});

Template.signin.onRendered(function(){
    $("#signinForm").validate({
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
