import Vue from "vue";
import App from "./App.vue";

import "./assets/main.css";
// import Echo from "laravel-echo";

// window.Pusher = require("pusher-js");

new Vue({
  render: (h) => h(App),
}).$mount("#app");

/*
// This assumes you have already saved your bearer token in your browsers local storage
const token = localStorage.getItem("user-token");

window.Echo = new Echo({
  broadcaster: "pusher",
  key: "websocketkey",
  wsHost: "http://127.0.0.1:8000",
  // authEndpoint: "http://api.somedomain.com/broadcasting/auth",
  encrypted: true,
  forceTLS: false,
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
  auth: {
    headers: {
      authorization: "Bearer " + token,
    },
  },
});
*/
