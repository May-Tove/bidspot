import { countdown, dateFormatted } from "../../tools/index.js";

export const listingCard = (listing) => {
  const listingCreated = dateFormatted(listing.created);
  // countdown timer
  const timer = countdown(listing.endsAt);

  // Get the highest bid from the array (last bid)
  let highestBid = "";

  if (listing.bids.length === 0) {
    highestBid = "No bids";
  } else {
    const sortedBids = listing.bids.sort((a, b) => a.amount - b.amount);
    const price = sortedBids.pop().amount;
    highestBid = `$ ${price}`;
  }

  // Make sure to use placeholder image if original is null, undefined or not valid
  let media = "";
  if (
    listing.media.length === 0 ||
    listing.media === null ||
    listing.media === ""
  ) {
    media = "/images/img-placeholder.jpeg";
  } else {
    media = listing.media[0];
  }

  return `<div class="col">
            <a class="listing-card card h-100 text-decoration-none border-0 shadow-sm" href="/src/pages/listings/details/index.html?id=${listing.id}">
                <div class="p-2">
                      <div class="card-img img-container rounded position-relative">
                        <img
                          src="${media}"
                          alt="${listing.title}"
                          class="listing-img img-fluid rounded"
                          onerror="src='/images/img-placeholder.jpeg'"
                        />
                        <div>
                          <span class="position-absolute top-0 end-0 m-1 small fw-bold p-2 rounded-pill" id="highestBid">${highestBid}</span>
                        </div>
                      </div>
                  </div>
                  <div class="card-body p-2 pt-0 d-flex flex-column">
                    <div class="d-flex align-items-center justify-content-between pb-2">
                      <p class="m-0 small text-muted">By ${listing.seller.name}</p>
                      <p class="m-0 small text-muted">${listingCreated}</p>
                    </div>
                      <p class="card-title fw-bold fs-6 text-wrap">${listing.title}</p>
                  </div>
                  <div class="card-footer border-0">
                    <div class="d-flex align-items-center justify-content-center text-center text-primary gap-2">
                     ${timer}
                    </div>
                  </div>
              </a>
          </div>`;
};
