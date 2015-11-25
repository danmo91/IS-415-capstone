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
        console.log('success!');
      },
      error : function (err) {
        console.log('error!');
      }
    });

  }
}
