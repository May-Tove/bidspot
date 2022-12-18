import { updateListing } from "../../api/listings/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import { dateFormatted } from "../../tools/formatDate.js";

export async function updateListingListener(currentListing) {
  const form = document.querySelector("#editListingForm");

  const id = getUrlSearchParam("id");

  if (form) {
    const endDate = dateFormatted(currentListing.endsAt);

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
