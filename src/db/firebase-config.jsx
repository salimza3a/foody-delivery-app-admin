import { AppsSharp } from "@mui/icons-material";
import { initializeApp } from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAbZQok8NzJh8n5uzHQtglmRxMxVRG2iDQ",
  authDomain: "foody-app-6d4d2.firebaseapp.com",
  projectId: "foody-app-6d4d2",
  storageBucket: "foody-app-6d4d2.appspot.com",
  messagingSenderId: "846295152827",
  appId: "1:846295152827:web:12f9ffc8c8bbf79224519e",
};

const app = initializeApp(firebaseConfig);

export default app;
