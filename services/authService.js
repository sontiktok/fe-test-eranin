// Đảm bảo rằng AuthService được đăng ký trong cùng module "authApp"
app.factory("AuthService", function ($http, $location) {
  var authService = {};

  authService.login = function (credentials) {
    return $http
      .post("http://localhost:3000/auth/login", credentials)
      .then(function (response) {
        return response.data;
      });
  };

  /**
   * AUTHENTICATED FUNCTION
   *
   * @returns true if token exists, false if not
   */
  authService.isAuthenticated = function () {
    const token = localStorage.getItem("accessToken");
    return token ? true : false;
  };

  /**
   * SENT OTP FUNCTION
   *
   * @param {*} email the email of user
   * @returns data of response
   */
  authService.sentOtp = function (email) {
    return $http
      .post("http://localhost:3000/otp/send-otp", {
        email,
      })
      .then(function (response) {
        return response.data;
      });
  };

  /**
   * REFRESH TOKEN FUNCTION
   * 
   * @returns response.data 
   * template: 
    "success": true or false based on token,
    "accessToken": token
   */
  authService.refreshToken = function () {
    const refreshToken = localStorage.getItem("refreshToken");
    return $http
      .post("http://localhost:3000/auth/refresh-token", { token: refreshToken })
      .then(function (response) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        $location.path("/login");
      });
  };

  return authService;
});
