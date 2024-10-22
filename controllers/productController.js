app.controller("ProductController", function ($scope, ProductService, $location) {

    //call api to get data
    const response = ProductService.getData(localStorage.getItem("accessToken"));

    //if success, set data to $scope.products
    response.then((data) => {
        if (data.success) {
            $scope.products = [
                {
                    name: "Iphone 12",
                    price: 1000,
                    description: "Điện thoại",
                    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
                },
                {
                    name: "Macbook Pro",
                    price: 2000,
                    description: "Laptop",
                    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
                },
                {
                    name: "Apple Watch",
                    price: 500,
                    description: "Đồng hồ thông minh",
                    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
                },
                {
                    name: "Airpods Pro",
                    price: 250,
                    description: "Tai nghe không dây",
                    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
                },
                {
                    name: "Ipad Pro",
                    price: 800,
                    description: "Máy tính bảng",
                    imageUrl: 'https://cdn.tgdd.vn/Products/Images/42/213031/iphone-12-xanh-duong-new-600x600-600x600.jpg'
                }
            ];
        }
    });

    /**
     * LOGOUT FUNCTION
     */
    $scope.logout = function () {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        $location.path("/login");
    };
});
