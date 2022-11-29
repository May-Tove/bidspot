import * as render from "./render/index.js";
import * as handlers from "./handlers/index.js";

render.renderListings();
render.renderProfile();
render.navbar();
render.renderListingDetails();

handlers.registerFormListener();
handlers.loginFormListener();
handlers.updateProfileListener();
handlers.createListingFormListener();
handlers.removeListingListener();
handlers.updateListingListener();
handlers.handleSearch();
handlers.sortListings();
