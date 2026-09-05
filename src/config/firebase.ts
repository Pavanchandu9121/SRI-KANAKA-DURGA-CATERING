import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA1lGQmgsYxNJTCqMA10qjwYcTxHhDNS-g",
  authDomain: "skdc-web-6c3c1.firebaseapp.com",
  projectId: "skdc-web-6c3c1",
  storageBucket: "skdc-web-6c3c1.firebasestorage.app",
  messagingSenderId: "349116472263",
  appId: "1:349116472263:web:9e2393e99733b66f4897e2",
  measurementId: "G-M1X91SBMN4"
};

export const app = initializeApp(firebaseConfig);

// Initialize Analytics conditionally (it requires a browser environment)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;
