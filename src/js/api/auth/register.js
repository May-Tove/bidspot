import { fetchError } from "../../error/error.js";
import { api_auction_url } from "../constants.js";
import { login } from "./login.js";

const endpoint = "/auth/register";
const method = "post";

/**
 * API call that register new users
 * @param {string} profile - values from form input
 */
export async function register(profile) {
  const registerUrl = api_auction_url + endpoint;

  const response = await fetch(registerUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body: JSON.stringify(profile),
  });

  const responseContainer = document.querySelector(".response-container");

  if (response.ok) {
    // Auto login user if response is OK
    const form = document.querySelector("#registerForm");

    const formData = new FormData(form);
    const user = Object.fromEntries(formData.entries());

    const newUser = {
      email: user.email,
      password: user.password,
    };

    login(newUser);

    const results = await response.json();
    return results;
  } else {
    responseContainer.classList.remove("d-none");
    responseContainer.innerHTML = await fetchError(response);
  }
}
