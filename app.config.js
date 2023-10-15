import "dotenv/config";

export default {
  expo: {
    name: "chatApp",
    slug: "chatApp",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#FFFFFF",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiKey: "AIzaSyDODhnm1WURkGD4B8zWH9JoOGy9fpWCg14",
      authDomain: "chatapp-ea3a8.firebaseapp.com",
      projectId: "chatapp-ea3a8",
      storageBucket: "chatapp-ea3a8.appspot.com",
      messagingSenderId: "141949111859",
      appId: "1:141949111859:web:8c813e95c32216bd8a9d46",
    },
  },
};
