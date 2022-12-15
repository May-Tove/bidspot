import { getListing, updateListing } from "../../api/listings/index.js";

export async function updateListingListener() {
  const form = document.querySelector("#editListingForm");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (form) {
    const currentListing = await getListing(id);
    const options = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };

    const endDate = new Date(currentListing.endsAt).toLocaleDateString(
      "en-GB",
      options
    );

    form.title.value = currentListing.title;
    form.description.value = currentListing.description;
    form.endsAt.value = endDate;
    form.media.value = currentListing.media.join(", ");
    form.tags.value = currentListing.tags.join(", ");

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const form = event.target;
      const data = new FormData(form);
      const title = data.get("title");
      const description = data.get("description");
      const endsAt = data.get("endsAt");
      const media = data.get("media").split(", ");
      const tags = data.get("tags").split(", ");

      const listing = { id, title, description, endsAt, media, tags };

      await updateListing(listing);
    });
  }
}
