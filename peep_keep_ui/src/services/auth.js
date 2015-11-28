// this object is returened when the we say require Auth
module.exports = {
  login: function(email, pass, cb) {
    console.log('inside auth login');
    console.log('arguments =>', arguments);

    // login user
    $.ajax({
      url : 'http://localhost:3000/api/v1/sessions',
      method : 'POST',
      dataType : 'json',
      data : {
        user : {
          email : email,
          password : pass,
        }
      },
      success : function (response) {
        // save user data in local storage
        localStorage.token = response.auth_token;
        var user = response.user;
        localStorage.fname = user.fname;
        localStorage.lname = user.lname;
        localStorage.email = user.email;
        localStorage.id = user.id;
        // run callback (redirect to home)
        if (cb) cb(true);
      },
      error : function (err) {
        console.log('authentication error!');
      }
    });

  }
}
