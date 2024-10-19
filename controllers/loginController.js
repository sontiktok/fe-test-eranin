app.controller("LoginController", function ($scope, AuthService, $location) {
  $scope.credentials = {
    email: "",
    password: "",
  };

  $scope.login = function () {
    AuthService.login($scope.credentials)
      .then(function (response) {
        if (response.success) {
          // Lưu accessToken vào localStorage hoặc sessionStorage
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);

          alert("Đăng nhập thành công!");
          $location.path("/dashboard"); // Điều hướng tới trang dashboard sau khi đăng nhập
        } else {
          $scope.errorMessage = "Sai email hoặc mật khẩu!";
        }
      })
      .catch(function (error) {
        $scope.errorMessage = "Lỗi khi đăng nhập!";
      });
  };
});
