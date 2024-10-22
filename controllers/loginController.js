app.controller("LoginController", function ($scope, AuthService, $location) {
  $scope.credentials = {
    email: "",
    password: "",
    otp: "",
  };

  $scope.isSentOtp = false;
  $scope.isLoadingSentOtp = false;
  $scope.isLoadingLogin = false;

  $scope.sendOtp = function () {
    $scope.isLoadingSentOtp = true;
    AuthService.sentOtp($scope.credentials.email)
      .then(function (response) {
        if (response.success) {
          $scope.isSentOtp = true;
          $scope.isLoadingSentOtp = false;
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Email does't exist!");
      });
  };

  $scope.login = function () {
    $scope.isLoadingLogin = true;
    AuthService.login($scope.credentials)
      .then(function (response) {
        if (response.success) {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          alert("Login successfully!");
          $location.path("/product");
        }
      })
      .catch(function (error) {
        alert("Invalid info login!");
      });
    $scope.isLoadingLogin = false;
  };

  /**
   * SUBMIT FORM FUNCTION
   */

  $scope.submitForm = function () {
    if ($scope.loginForm.$valid) {
      console.log($scope.credentials);
      $scope.login();
    }
  };
});
