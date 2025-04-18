# PantryPilot 
![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white&color=orange)
![MUI](https://img.shields.io/badge/MUI-%230081CB.svg?style=for-the-badge&logo=mui&logoColor=white)



## Overview

**PantryPilot** is a dynamic web application designed to help you manage your pantry inventory. It allows you to add, search, and remove items, providing a simple and intuitive interface to keep track of your stock.

## Features

- **Add Items:** Easily add new items to your pantry with a user-friendly interface.
- **Search Items:** Quickly find items in your pantry using a search bar.
- **Remove Items:** Remove items from your pantry or adjust their quantities.
- **Real-Time Updates:** Synchronize data with Firebase Firestore in real-time.
- **Animated UI:** Modern, animated UI elements with a sleek, futuristic design.
- **Responsive Design:** Works seamlessly across different devices and screen sizes.

## How to Deploy Locally

Follow these steps to set up and run PantryPilot on your local machine:

### Prerequisites

- [Node.js](https://nodejs.org/) (v20 or higher)
- [npm](https://www.npmjs.com/get-npm) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the Repository**

    ```sh
    git clone <repository-url>
    cd <repository-name>

2. **Set Up Firebase**

- Create a new Firebase project on the [Firebase Console](https://console.firebase.google.com/).
- Enable Firestore database for your project.
- Copy the Firebase configuration object from the project settings.

3. **Configure Environment Variables**

- Create a new file named `.env` in the root directory of the project.
- Add the following environment variables to the `.env` file:

  ```sh
  FIREBASE_API_KEY=YOUR_API_KEY
  FIREBASE_AUTH_DOMAIN=YOUR_AUTH_DOMAIN
  FIREBASE_PROJECT_ID=YOUR_PROJECT_ID
  FIREBASE_STORAGE_BUCKET=YOUR_STORAGE_BUCKET
  FIREBASE_MESSAGING_SENDER_ID=YOUR_MESSAGING_SENDER_ID
  FIREBASE_APP_ID=YOUR_APP_ID
  ```

- Replace `YOUR_API_KEY`, `YOUR_AUTH_DOMAIN`, `YOUR_PROJECT_ID`, `YOUR_STORAGE_BUCKET`, `YOUR_MESSAGING_SENDER_ID`, and `YOUR_APP_ID` with the corresponding values from your Firebase project configuration.

4. **Start the Development Server**

-
     ```sh
     npm start
     ```

5. **Access the App**

     Open your web browser and navigate to `http://localhost:3000` to access the App.
     
<hr>
That's it! You have successfully deployed the Pantry Management App locally. Enjoy managing your pantry inventory with ease!
