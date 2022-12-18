import { createListing } from "../../api/listings/index.js";

const form = document.querySelector("#createForm");

function populateForm(listing) {
  form.title.value = listing.title;
  form.description.value = listing.description;
  form.endsAt.value = listing.endsAt;
  form.media.value = listing.media.join(", ");
  form.tags.value = listing.tags.join(", ");
}

/**
 * Creates listing on submit
 */
export function createListingFormListener() {
  if (form) {
    form.addEventListener("input", () => {
      const listing = {
        title: form.title.value,
        description: form.description.value,
        endsAt: form.endsAt.value,
        media: form.media.value.split(", "),
        tags: form.tags.value.split(", "),
      };
      populateForm(listing);
    });

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const title = data.get("title");
      const description = data.get("description");
      const endsAt = data.get("endsAt");
      const media = data.get("media").split(", ");
      const tags = data.get("tags").split(", ");

      const listing = { title, description, endsAt, media, tags };

      await createListing(listing);
    });
  }
}
