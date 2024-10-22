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
      resolve: {
        auth: function (AuthService, $location) {
          if (AuthService.isAuthenticated()) {
            $location.path("/product");
          }
        },
      },
    })
    .when("/register", {
      templateUrl: "views/register.html",
      controller: "RegisterController",
    })
    .when("/product", {
      templateUrl: "views/product.html",
      controller: "ProductController",
      resolve: {
        auth: function (AuthService, $location) {
          if (!AuthService.isAuthenticated()) {
            $location.path("/login");
          }
        },
      },
    })
    .otherwise({
      redirectTo: "/login",
    });
});
