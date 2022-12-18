import { get, remove } from "../../storage/index.js";

/**
 * This will log out user and delete profile information from localStorage
 */
export function logout() {
  remove("token");
  remove("user");

  const token = get("token");
  const user = get("user");
  if (token === null && user === null) {
    location.href = "/index.html";
  } else {
    alert("There was a problem logging out");
  }
}
