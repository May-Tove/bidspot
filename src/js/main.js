import * as render from "./render/index.js";
import * as handlers from "./handlers/index.js";

render.renderListings();

handlers.registerFormListener();
handlers.loginFormListener();
