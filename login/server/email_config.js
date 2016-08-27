Accounts.emailTemplates.siteName = "Brand";
Accounts.emailTemplates.from = "Brand <admin@brand.com>";

// verifyEmail
Accounts.emailTemplates.verifyEmail = {
    subject(){
        return "[Brand] Пожалуйста, подтвердите свой почтовый адрес"
    },
    html(user, url) {
        var emailAddress = user.emails[0].address,
            urlWithoutHash = url.replace('#/', ''),
            supportEmail = "support@brand.com",
            emailBody = '<p>Что бы подтвердить свой почтовый адрес <a href="mailto:' + emailAddress + '">' + emailAddress + '</a>'
                        + ' перейдите по следующей ссылке:<br><br><a href="' + urlWithoutHash + '">' + urlWithoutHash + '</a><br><br>'
                        + 'Если вы не запрашивали эту проверку, проигнарируйте это письмо. '
                        + 'Если у вас возникли вопросы, свяжитесь с нашей службой поддержки: <a href="mailto:' + supportEmail + '">' + supportEmail + '</a>.</p>';
        return emailBody;
    }
};

// resetPassword
Accounts.emailTemplates.resetPassword = {
    subject(){
        return "[Brand] Сброс пароля"
    },
    html(user, url) {
        var emailAddress = user.emails[0].address,
            urlWithoutHash = url.replace('#/', ''),
            supportEmail = "support@brand.com",
            emailBody = '<p>Что бы сбросить пароль,'
                        + ' перейдите по следующей ссылке:<br><br><a href="' + urlWithoutHash + '">' + urlWithoutHash + '</a><br><br>'
                        + 'Если вы не посещяли Brand, проигнарируйте это письмо. '
                        + 'Если у вас возникли вопросы, свяжитесь с нашей службой поддержки: <a href="mailto:' + supportEmail + '">' + supportEmail + '</a>.</p>';
        return emailBody;
    }
};
