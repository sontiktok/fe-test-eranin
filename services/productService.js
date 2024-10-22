// Đảm bảo rằng AuthService được đăng ký trong cùng module "authApp"
app.factory("ProductService", function ($http, AuthService) {
  var productService = {};

  /**
   * GET DATA FUNCTION
   *
   * @param {*} token the token of user
   * @returns the data of products
   */
  productService.getData = function (token) {
    return $http
      .get("http://localhost:3000/auth/products", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
        if (error.status === 403 && error.data.error === "jwt expired") {
          return AuthService.refreshToken().then(() => {
            return productService.getData(localStorage.getItem("accessToken"));
          });
        }
      });
  };

  return productService;
});
