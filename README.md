# Place Bookmarks

This is a React Native mobile app for searching and bookmarking places. It has great look and feel to it and uses powerful Google Places API and Google Static Maps API for location search and insights.


## Getting Started

### 1. Download Expo
```
npm install -g expo-cli
```

Expo is an ecosystem of tools and services built around React Native to develop and bundle native iOS and Android apps. [More Details](https://docs.expo.io/).

### 2. Add Google API Keys
```
cd app/
touch API_KEY.js // On mac
```

**app/API_KEY.js**
```
export const API_KEY= // Your Google API key (with Places API enabled)

```

### 3. Boot Up Expo Dev Tools
```
cd app
npm install
npm start
```

Expo will build the project and open a DevTools interface inside your browser. The project app can then be inspected locally on the iOS Simulator, an Android Virtual Device, or through a mobile device with the Expo app. 


### 4. Viewing App

#### Using Android Studio Emulator

To view app on an emulated Android device, you must install Android Studio and set up an Android Virtual Device (any device with the latest version of Android should work). More instructions can be found [here](https://docs.expo.io/versions/latest/workflow/android-studio-emulator/).


#### Using iOS Simulator

To view app on an iOS Simulator, you will first need to install Xcode. More instructions can be found [here](https://docs.expo.io/versions/v33.0.0/workflow/ios-simulator/).

#### Using a Tunnel

Atlernatively, Expo provides a tunnel for viewing the app through a mobile device that has the Expo app, which can be downloaded from the App Store or Google Play. In Expo's DevTools page opened on the browser, click 'Tunnel' and scan the QR code with your device's camera.

