import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyD5GBaoxatl8nYGoDoKpNBclJCfngSfSAU",
    authDomain: "maskundebala-859b2.firebaseapp.com",
    projectId: "maskundebala-859b2",
    storageBucket: "maskundebala-859b2.firebasestorage.app",
    messagingSenderId: "660767373875",
    appId: "1:660767373875:web:5c890aea367ef527680146",
    measurementId: "G-GNSNYKSQH6"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app, analytics };
