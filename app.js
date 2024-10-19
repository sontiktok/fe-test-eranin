// Đảm bảo rằng module "authApp" được khai báo trước khi sử dụng AuthService
var app = angular.module("authApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $routeProvider
    .when("/login", {
      templateUrl: "views/login.html",
      controller: "LoginController",
    })
    .when("/register", {
      templateUrl: "views/register.html",
      controller: "RegisterController",
    })
    .otherwise({
      redirectTo: "/login",
    });
});
