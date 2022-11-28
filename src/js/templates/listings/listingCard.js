export const listingCard = (listing) => {
  // formatting date
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const listingEnds = new Date(listing.endsAt).toLocaleDateString(
    "en-GB",
    options
  );

  // Get the highest bid from the array (last bid)
  let highestBid = "0";
  if (listing._count.bids !== 0) {
    highestBid = listing.bids.pop().amount;
  }

  return `<div class="col-12 col-xs-6 col-sm-6 col-md-4 col-lg-4 col-xl-3 py-3 px-2">
    <a
      class="listing-card text-decoration-none"
      href="/src/pages/listings/details/index.html?id=${listing.id}"
    >
      <div class="bg-white rounded p-2 shadow-sm">
        <div class="img-container rounded">
          <img
            src="${listing.media[0]}"
            alt="${listing.title}"
            class="listing-img img-fluid rounded"
          />
  
        </div>
        <div>
          <h6 class="fw-bold m-0 py-2 border-bottom">${listing.title}</h6>
            <div class="d-flex align-items-center justify-content-between pt-2 rounded" id="cardDetails">
            <div class="d-flex flex-column">
            <p class="m-0 small text-muted">Auction Ends</p>
            <span>${listingEnds}</span>
          </div>
            <div class="d-flex flex-column">
              <p class="m-0 small text-muted">Highest Bid</p>
              <span>${highestBid} $</span>
            </div>
          </div>
        </div>

      </div>
    </a>
    </div>`;
};
