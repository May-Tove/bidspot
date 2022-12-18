import { getListing } from "../../api/listings/getListing.js";
import * as render from "../../render/index.js";
import * as listener from "../../handlers/index.js";
import * as templates from "../../templates/listings/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";
import { createBidListener } from "../../handlers/index.js";

/**
 * Displaying a single listing details from the API
 */
export async function renderListingDetails() {
  const id = getUrlSearchParam("id");
  if (id) {
    const result = await getListing(id);

    const listingContainer = document.querySelector("#listingContainer");
    const currentPage = document.querySelector("#currentPage");
    const listingTitle = document.querySelector("#listingTitle");
    const metaDescription = document.querySelector("#metaDescription");

    if (listingTitle) {
      listingTitle.innerHTML = `BidSpot | ${result.title}`;
      metaDescription.content = result.description;
    }

    listingContainer.innerHTML = templates.listingDetails(result);
    currentPage.innerHTML = `<a class="link text-decoration-none active" href="${result.id}">${result.title}</a>`;

    render.renderAllBids();
    render.renderListingImg(result);
    render.renderTags(result.tags);
    render.displayListingOptions(result.seller.name);
    render.displayBidForm(result.seller.name);
    render.activateSellerLink(result.seller.name);

    listener.updateListingListener(result);
    listener.removeListingListener(result);

    // calling function to create a bid after HTML bid form has been rendered together with listing details
    createBidListener();
  }
}
