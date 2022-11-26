import { getListing } from "../api/listings/getListing.js";
import { renderAllBids } from "./allBids.js";
import { renderListingImg } from "./listingImg.js";
import { renderTags } from "./tags.js";
import * as templates from "../templates/listings/index.js";

/**
 * Displaying a single post details on the page using API call
 */
export async function renderListingDetails() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) {
    const result = await getListing(id);
    console.log(result);

    const listingContainer = document.querySelector("#listingContainer");
    const currentPage = document.querySelector("#currentPage");

    if (listingContainer) {
      listingContainer.innerHTML = templates.listingDetails(result);
      currentPage.innerHTML = `${result.title}`;
    }
    renderAllBids();
    renderListingImg();
    renderTags();
  }
}
