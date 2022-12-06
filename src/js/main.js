import * as render from "./render/index.js";
import * as handlers from "./handlers/index.js";

render.navbar();
render.renderProfile();
render.renderListings();
render.renderListingDetails();

handlers.registerFormListener();
handlers.loginFormListener();
handlers.updateProfileListener();
handlers.createListingFormListener();
handlers.updateListingListener();
handlers.removeListingListener();
handlers.handleSearch();
handlers.sortListings();
