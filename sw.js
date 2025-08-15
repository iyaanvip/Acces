importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCs_Jb63WZGevle_OXM2jlOS36aftE_29Y",
  authDomain: "adminvvip.firebaseapp.com",
  databaseURL: "https://adminvvip-default-rtdb.firebaseio.com",
  projectId: "adminvvip",
  storageBucket: "adminvvip.firebasestorage.app",
  messagingSenderId: "911235567086",
  appId: "1:911235567086:web:8d178b73c3b48b790ed2ff",
  measurementId: "G-M5RS20R3P3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const { title, body, icon, link } = payload.data;
  self.registration.showNotification(title, {
    body: body,
    icon: icon,
    data: { link: link }
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  if (event.notification.data.link) {
    event.waitUntil(clients.openWindow(event.notification.data.link));
  }
});