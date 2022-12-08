import { getListing } from "../../api/listings/getListing.js";
import * as render from "../../render/index.js";
import * as templates from "../../templates/listings/index.js";
import { createBidListener } from "../../handlers/index.js";

/**
 * Displaying a single post details on the page using API call
 */
export async function renderListingDetails() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");
  if (id) {
    const result = await getListing(id);

    const listingContainer = document.querySelector("#listingContainer");
    const currentPage = document.querySelector("#currentPage");
    const listingTitle = document.querySelector("#listingTitle");

    if (listingTitle) {
      listingTitle.innerHTML = `BidSpot | ${result.title}`;
    }

    if (listingContainer) {
      listingContainer.innerHTML = templates.listingDetails(result);
      currentPage.innerHTML = `${result.title}`;

      render.renderAllBids();
      render.renderListingImg();
      render.renderTags();
      render.displayListingOptions(result.seller.name);
      render.displayBidForm(result.seller.name);
      render.activateSellerLink(result.seller.name);

      // calling function to create a bid after HTML bid form has been rendered together with listing details
      createBidListener();
    }
  }
}
