# Angular Login with MFA (Multi-Factor Authentication)

This project implements a login system with Multi-Factor Authentication (MFA) using OTP (One-Time Password) sent via email in an AngularJS application (version 1.x). This application interacts with the backend API available [here](https://github.com/sontiktok/test-eranin).

## Requirements

- **Node.js v10.24.1**
- **NPM**

## Installation Guide

To set up and run the project locally, follow these steps:

1. Clone the frontend Angular repository:

   ```bash
   git clone https://github.com/sontiktok/fe-test-eranin
   ```

2. Navigate to the project directory:

   ```bash
   cd fe-test-eranin
   ```

3. Install the necessary libraries:

   ```bash
   npm install
   ```

## Running the Application

To start the application, run the following command:

```bash
npm start
```

## Features

- **Login**: Allows users to log in with their email and password.
- **Multi-Factor Authentication (MFA)**: After entering the correct email and password, an OTP will be sent to the user's email. The user must enter this OTP to complete the login process.

## Backend API

The Angular frontend connects to the backend API hosted in the following repository: [Backend API](https://github.com/sontiktok/test-eranin).

- **POST** `/otp/send-otp`: Sends an OTP to verify the user via email.
- **POST** `/auth/login`: Authenticates the email and password, and verifies the OTP sent to the user's email.

## Project Structure

- **views/**: Contains HTML files for the login and OTP verification interfaces.
- **controllers/**: Handles the logic for login and OTP verification.
- **services/**: Manages API calls to the backend related to authentication.
- **styles/**: Contains CSS files for styling the user interface.

## Technologies Used

- **AngularJS v1.x**
- **Node.js v10.24.1**
