// Đảm bảo rằng AuthService được đăng ký trong cùng module "authApp"
app.factory("AuthService", function ($http) {
  var authService = {};

  authService.login = function (credentials) {
    return $http
      .post("http://localhost:3000/auth/login", credentials)
      .then(function (response) {
        return response.data;
      });
  };

  return authService;
});
