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

  return `<div class="col-12 col-xs-12 col-sm-6 col-md-6 col-lg-4 px-0 py-2 px-sm-2">
    <a
      class="listing-card text-decoration-none"
      href="/src/pages/listings/details/index.html?id=${listing.id}"
    >
      <div class="bg-white p-3 rounded">
        <div class="img-container rounded">
          <img
            src="${listing.media[0]}"
            alt="${listing.title}"
            class="listing-img img-fluid rounded"
          />
        </div>

        <div
          class=" border-bottom pt-3 pb-3"
        >
          <h5 class="fw-bold m-0 pe-2">${listing.title}</h5>

        </div>
        <div class="d-flex justify-content-between pt-3">
          <div class="d-flex flex-column align-items-center">
            <p class="m-0">Auction Ends</p>
            <span class="countdown fw-bold">${listingEnds}</span>
          </div>
          <div class="d-flex flex-column align-items-center">
            <p class="m-0">Bids</p>
            <span class="highest-bid fw-bold">${listing._count.bids}</span>
          </div>
        </div>
      </div>
    </a>
    </div>`;
};
