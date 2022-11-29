import { getListing } from "../../api/listings/getListing.js";
import { renderAllBids } from "./bids.js";
import { renderListingImg } from "./images.js";
import { renderTags } from "./tags.js";
import { displayListingOptions } from "./options.js";
import * as templates from "../../templates/listings/index.js";
import { displayBidForm } from "./bidForm.js";
import { createBidListener } from "../../handlers/index.js";

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
    displayListingOptions(result.seller.name);
    displayBidForm(result.seller.name);

    // calling function to create a bid after HTML bid form has been rendered together with listing details
    createBidListener();
  }
}
