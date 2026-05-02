import { auth } from './firebase-config.js';
import { t } from './translations.js';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const signupForm = document.getElementById('signupForm');
if(signupForm){
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMsg');
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert(t('successSignup'));
      window.location.href = "login.html";
    } catch(error){
      let msg = error.code === 'auth/email-already-in-use' ? t('errorEmailUsed') : error.code === 'auth/weak-password' ? t('errorWeakPassword') : error.message;
      errorDiv.innerText = msg;
    }
  });
}

const loginForm = document.getElementById('loginForm');
if(loginForm){
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('errorMsg');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert(t('successLogin'));
      window.location.href = "recipes.html";
    } catch(error){
      let msg = error.code === 'auth/invalid-credential' ? t('errorInvalidCred') : error.code === 'auth/user-not-found' ? t('errorUserNotFound') : error.message;
      errorDiv.innerText = msg;
    }
  });
}