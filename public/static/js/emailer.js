$(document).ready(function () {
    PARSE_APP_KEY = "3Z2O9FugVaNK1h2lBBafUTlVIEo0kD0qyZQBRl81";
    PARSE_JS_KEY = "l0cKiOWzuzZvYrcAlzLXGRHBcIxhuGu8B6QNOyEr";

    Parse.initialize(PARSE_APP_KEY, PARSE_JS_KEY);
    Parse.serverURL = "https://parseapi.back4app.com/";
    $('#contact').submit(function (e) {
        e.preventDefault();
        var data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        }
        Parse.Cloud.run("sendmail", data, {
            success: function (object) {
                alert('Message sent');
            },
            error: function (object, error) {
                alert('Error');
            }
        });
    });
});