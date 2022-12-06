import { getListing } from "../../api/listings/index.js";
import { allBids } from "../../templates/index.js";
import { noResultError } from "../../error/error.js";

export async function renderAllBids() {
  const bidsContainer = document.querySelector("#allBidsContainer");

  if (bidsContainer) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    const listing = await getListing(id);

    const bids = listing.bids;
    const output = bids.reverse().map(allBids);
    if (bids.length === 0) {
      bidsContainer.innerHTML = noResultError("No bids yet");
    } else {
      bidsContainer.innerHTML = output.join("");
    }
  }
}
