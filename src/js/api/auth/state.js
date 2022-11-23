import { get } from "../../storage/index.js";

export const isLoggedIn = () => Boolean(get("token"));

export const profile = () => get("profile");
