// this object is returened when the we say require Auth
module.exports = {
  login: function(email, pass, cb) {

    // If a token already exists, execute callback & continue
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true, this.getEmail());
      return;
    }

    // login user
    var _this = this;
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
        _this.onChange(true, user.email);
      },
      error : function (err) {
        // run callback (display error message)
        if (cb) cb (false, err);
        _this.onChange(false);
      }
    });

  },

  logout(cb) {
    // delete local storage data
    delete localStorage.token;
    delete localStorage.fname;
    delete localStorage.lname;
    delete localStorage.username;
    delete localStorage.email;
    delete localStorage.id;
    // redirect to landing page
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  getEmail() {
      return localStorage.email
  },

  onChange: function () {},

}
