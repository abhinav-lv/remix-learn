import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBznNNwS90eDuxme-e2yX0AZoNn59D18Cs",
    authDomain: "vit-ffcs-scheduler.firebaseapp.com",
    projectId: "vit-ffcs-scheduler",
    storageBucket: "vit-ffcs-scheduler.appspot.com",
    messagingSenderId: "711205374232",
    appId: "1:711205374232:web:0b2abcf74aaf11c053366d",
    measurementId: "G-KFRY1YKLKC",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
