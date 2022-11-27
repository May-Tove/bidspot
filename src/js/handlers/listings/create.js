import { createListing } from "../../api/listings/index.js";

/**
 * Event listener that creates a new form when submitting form
 */
export function createListingFormListener() {
  const form = document.querySelector("#createForm");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());

      createListing(listing);
      console.log(listing);
    });
  }
}
