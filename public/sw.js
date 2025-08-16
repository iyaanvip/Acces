importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyCs_Jb63WZGevle_OXM2jlOS36aftE_29Y",
  authDomain: "adminvvip.firebaseapp.com",
  databaseURL: "https://adminvvip-default-rtdb.firebaseio.com",
  projectId: "adminvvip",
  storageBucket: "adminvvip.appspot.com",
  messagingSenderId: "911235567086",
  appId: "1:911235567086:web:8d178b73c3b48b790ed2ff",
  measurementId: "G-M5RS20R3P3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon, click_action } = payload.notification;
  self.registration.showNotification(title, {
    body,
    icon,
    data: { url: click_action }
  });
});

self.addEventListener("notificationclick", function(event) {
  event.notification.close();
  event.waitUntil(clients.openWindow(event.notification.data.url));
});