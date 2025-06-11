import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

const redirectTo = sessionStorage.getItem("redirectTo");
if (redirectTo) {
  sessionStorage.removeItem("redirectTo");
  history.replaceState(null, "", redirectTo);
}

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
