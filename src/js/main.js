import * as render from "./render/index.js";
import * as handlers from "./handlers/index.js";

render.renderListings();
render.renderProfile();
render.navbar();

handlers.registerFormListener();
handlers.loginFormListener();
handlers.updateProfileListener();
handlers.logoutListener();
