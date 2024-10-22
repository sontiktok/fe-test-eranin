# Đăng nhập Angular với MFA (Xác thực nhiều lớp)

Dự án này triển khai hệ thống đăng nhập với Xác thực nhiều lớp (MFA) sử dụng mã OTP (One-Time Password) gửi qua email trong ứng dụng AngularJS (phiên bản 1.x). Ứng dụng này tương tác với API backend có sẵn tại [đây](https://github.com/sontiktok/test-eranin).

## Yêu cầu

- **Node.js v10.24.1**
- **NPM**

## Hướng dẫn cài đặt

Để thiết lập và chạy dự án cục bộ, thực hiện theo các bước sau:

1. Clone repository của frontend Angular:

   ```bash
   git clone https://github.com/sontiktok/fe-test-eranin
   ```

2. Di chuyển vào thư mục dự án:

   ```bash
   cd fe-test-eranin
   ```

3. Cài đặt các thư viện cần thiết:
   ```bash
   npm install
   ```

## Chạy ứng dụng

Để khởi chạy ứng dụng, chạy lệnh sau:

```bash
npm start

## Chức năng

- **Đăng nhập**: Cho phép người dùng đăng nhập bằng email và mật khẩu.
- **Xác thực nhiều lớp (MFA)**: Sau khi nhập đúng email và mật khẩu, một mã OTP sẽ được gửi đến email của người dùng. Người dùng cần nhập OTP này để hoàn thành quy trình đăng nhập.

## API Backend

Frontend Angular kết nối với API backend được host tại repository sau: [API Backend](https://github.com/sontiktok/test-eranin).

- **POST** `/otp/send-otp`: Gửi otp để xác thực người dùng thông qua email.
- **POST** `/auth/login`: Xác thực email và mật khẩu, đồng thời xác thực otp đã được gửi thông qua email người dùng.

## Cấu trúc dự án

- **views/**: Chứa các tệp HTML cho giao diện đăng nhập và xác thực OTP.
- **controllers/**: Xử lý logic cho việc đăng nhập và xác thực OTP.
- **services/**: Quản lý việc gọi API tới backend liên quan đến xác thực.
- **styles/**: Chứa các tệp CSS để định kiểu giao diện người dùng.

## Công nghệ sử dụng

- **AngularJS v1.x**
- **Node.js v10.24.1**

```
