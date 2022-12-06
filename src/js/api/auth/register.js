import { authError } from "../../error/error.js";
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
  const body = JSON.stringify(profile);

  const response = await fetch(registerUrl, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  //Show error message if register failed or be redirected to login if register succeed
  const responseContainer = document.querySelector(".response-container");

  if (!response.ok) {
    if (responseContainer) {
      responseContainer.classList.remove("d-none");
      responseContainer.innerHTML = authError("User already exists");
    }
  } else {
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
  }
}
