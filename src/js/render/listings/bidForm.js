import { get } from "../../storage/index.js";
import { bidForm } from "../../templates/index.js";

export function displayBidForm(seller) {
  const formContainer = document.querySelector("#bidFormContainer");

  if (formContainer) {
    formContainer.innerHTML = "";
    const loggedInUser = get("user").name;

    if (loggedInUser === seller) {
      formContainer.innerHTML = "";
    } else {
      formContainer.innerHTML = bidForm();
    }
  }
}
