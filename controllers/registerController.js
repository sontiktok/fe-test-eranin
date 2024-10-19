app.controller("RegisterController", function ($scope, AuthService, $location) {
  $scope.user = {
    name: "",
    email: "",
    password: "",
  };

  $scope.register = function () {
    AuthService.register($scope.user)
      .then(function (response) {
        if (response.success) {
          alert("Đăng ký thành công!");
          $location.path("/login");
        } else {
          $scope.errorMessage = "Đăng ký thất bại. Email đã tồn tại.";
        }
      })
      .catch(function (error) {
        $scope.errorMessage = "Có lỗi xảy ra trong quá trình đăng ký!";
      });
  };
});
