import * as listeners from "./handlers/index.js";
import * as render from "./render/index.js";
import { validateDate } from "./tools/validateDatePicker.js";

const path = location.pathname;

export function router() {
  switch (path) {
    case "/index.html":
      render.navbar();
      render.latestListings();
      break;
    case "/src/pages/profile/register/index.html":
      listeners.registerFormListener();
      break;
    case "/src/pages/profile/login/index.html":
      listeners.loginFormListener();
      break;
    case "/src/pages/listings/index.html":
      render.navbar();
      render.allListings();
      listeners.handleSearch();
      listeners.sortListings();
      break;
    case "/src/pages/listings/details/index.html":
      render.navbar();
      render.renderListingDetails();
      break;
    case "/src/pages/listings/create/index.html":
      render.navbar();
      listeners.createListingFormListener();
      validateDate();
      break;
    case "/src/pages/profile/index.html":
      render.navbar();
      render.renderProfile();
  }
}
