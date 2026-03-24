importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/12.11.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyAEwEkcWSwzORURd3hQpXZ0VHyl2h9PrLY",
  authDomain: "news-app-2e5ac.firebaseapp.com",
  projectId: "news-app-2e5ac",
  storageBucket: "news-app-2e5ac.firebasestorage.app",
  messagingSenderId: "26803931760",
  appId: "1:26803931760:web:3c889f991318f47bf202b5"
});

const messaging = firebase.messaging();
