# PantryPilot 
![Logo](https://i.imgur.com/foGrGUX.png)


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

- [Node.js](https://nodejs.org/) (v14 or higher)
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