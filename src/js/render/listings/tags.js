import { getListing } from "../../api/listings/getListing.js";
import { tags } from "../../templates/listings/tags.js";

export async function renderTags() {
  const tagContainer = document.querySelector("#tagContainer");

  if (tagContainer) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const listing = await getListing(id);

    const allTags = listing.tags;
    const output = allTags.map(tags);

    if (allTags.length === 0) {
      tagContainer.innerHTML = " ";
    } else {
      tagContainer.innerHTML = output.join("");
    }
  }
}
