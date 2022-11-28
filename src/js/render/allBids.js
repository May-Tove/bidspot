import { getListing } from "../api/listings/getListing.js";
import { allBids } from "../templates/listings/allBids.js";

export async function renderAllBids() {
  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  const bidsContainer = document.querySelector("#allBidsContainer");

  if (bidsContainer) {
    const listing = await getListing(id);

    const bids = listing.bids;
    const output = bids.reverse().map(allBids);
    if (bids.length === 0) {
      bidsContainer.innerHTML = "No bids yet";
    } else {
      bidsContainer.innerHTML = output.join("");
    }
  }
}
