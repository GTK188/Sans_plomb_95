import Vue from "vue";
import App from "./App.vue";

import "./assets/main.css";
import Echo from "laravel-echo";
import * as Pusher from "pusher-js";

Vue.prototype.$pusher = new Pusher("websocketkey");
// This assumes you have already saved your bearer token in your browsers local storage

Vue.prototype.$echo = new Echo({
  broadcaster: "pusher",
  key: "websocketkey",
  wsHost: "127.0.0.1:6001",
  authEndpoint: "/broadcasting/auth",
  encrypted: true,
  forceTLS: false,
  wsPort: 6001,
  wssPort: 6001,
  disableStats: true,
  enabledTransports: ["ws", "wss"],
});

new Vue({
  render: (h) => h(App),
}).$mount("#app");
