import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { firebaseConfig } from "./firebase-config.js";

const app = initializeApp(firebaseConfig);
let analytics;
try {
  analytics = getAnalytics(app);
} catch (err) {
  console.warn("Analytics failed to initialize:", err);
}
const db = getFirestore(app);
const auth = getAuth(app);

export { app, analytics, db, auth };
