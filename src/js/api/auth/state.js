import { get } from "../../storage/index.js";

export const isLoggedIn = () => Boolean(get("token"));

export const loggedInProfile = () => get("user");
