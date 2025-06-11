import { mount } from "svelte";
import "./app.css";
import App from "./App.svelte";

if (sessionStorage.redirect) {
  const redirectUrl = sessionStorage.redirect;
  delete sessionStorage.redirect;
  history.replaceState(null, "", redirectUrl);
}

const app = mount(App, {
  target: document.getElementById("app")!,
});

export default app;
