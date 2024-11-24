import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCdhKEjcOsAD_q3B2s_PjsKszFmpC3mH8E",
  authDomain: "m3ak-36f5a.firebaseapp.com",
  projectId: "m3ak-36f5a",
  storageBucket: "m3ak-36f5a.firebasestorage.app",
  messagingSenderId: "857959466808",
  appId: "1:857959466808:web:270938d85a15d9dbf123cd",
  measurementId: "G-HWK8SL0W0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Auth
export const auth = getAuth(app);