/*import { getListing, updateListing } from "../../api/listings/index.js";*/

/**
 * Event listener to update a post on form submit
 */
/*export async function updateListingListener() {
  const form = document.querySelector("#editListingForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const listing = await getListing(id);
    form.title.value = listing.title;
    form.description.value = listing.description;
    form.endsAt.value = listing.endsAt;
    form.tags.value = listing.tags;
    form.media.value = listing.media;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const formData = new FormData(form);
      const listing = Object.fromEntries(formData.entries());
      listing.id = id;

      updateListing(listing);
    });
  }
}*/
