import { api_auction_url } from "../constants.js";
import * as storage from "../../storage/index.js";
import { authError } from "../../error/error.js";

const endpoint = "/auth/login";
const method = "post";

/**
 * This will log in a registered user and store profile information in localStorage
 * @param {object} profile -  the values from the log in form will create this object when logging in
 */
export async function login(profile) {
  const loginUrl = api_auction_url + endpoint;
  const body = JSON.stringify(profile);

  const response = await fetch(loginUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  console.log(response);

  const { accessToken, ...user } = await response.json();

  //Storing token and profile details in localStorage
  storage.store("token", accessToken);
  storage.store("user", user);

  //Show error message if login failed or be redirected to homepage if login succeed
  const responseContainer = document.querySelector(".response-container");

  if (!response.ok) {
    if (responseContainer) {
      responseContainer.classList.remove("d-none");
      responseContainer.innerHTML = authError("Invalid email or password");
    }
  } else {
    location.href = "/src/pages/listings/index.html";
  }
}
