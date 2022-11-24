import * as render from "./render/index.js";
import * as handlers from "./handlers/index.js";
import { getProfiles } from "./api/profile/getProfiles.js";

render.renderListings();
render.renderProfile();

handlers.registerFormListener();
handlers.loginFormListener();
handlers.updateProfileListener();
getProfiles();
