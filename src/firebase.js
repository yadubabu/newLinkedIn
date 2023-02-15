import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzIDvN1eUiW_-wKS_8XD7A8VoqKt8XIsc",
  authDomain: "linkedin-clone-70415.firebaseapp.com",
  projectId: "linkedin-clone-70415",
  storageBucket: "linkedin-clone-70415.appspot.com",
  messagingSenderId: "445744837423",
  appId: "1:445744837423:web:d2f0499e0dcafdf62927da",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// export default app;
