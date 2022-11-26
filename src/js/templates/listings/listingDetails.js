export const listingDetails = (listing) => {
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
  let highestBid = "N/A";
  if (listing._count.bids !== 0) {
    highestBid = listing.bids.pop().amount;
  }

  return ` <div class="col-12 col-lg-5">
  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner"  id="carouselContainer">

  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  </div>
  <div class="col">
    <div class="bg-white p-3 rounded">
      <div class="border-bottom pt-3 pb-2">
        <h4 class="fw-bold">${listing.title}</h4>
        <p class="text-muted">Listing ID: ${listing.id}</p>
      </div>

      <div
        class="bg-light rounded p-4 d-flex flex-column gap-4 flex-lg-row align-items-center justify-content-around my-4"
      >
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="fw-bold m-0">Total Bids</p>
          <span>${listing._count.bids}</span>
        </div>
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="fw-bold m-0">Highest Bid</p>
          <span>${highestBid}</span>
        </div>
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="fw-bold m-0">Auction Ends</p>
          <span>${listingEnds}</span>
        </div>
      </div>
      <div class="my-3 border-top">
        <h5 class="fw-bold py-3">Place a bid!</h5>
        <form class="d-flex align-items-center gap-2">
          <div class="w-50">
            <input
              class="form-control w-100"
              type="text"
              placeholder="Enter your bid amount"
            />
          </div>

          <div>
            <button class="btn btn-primary" type="submit">
              Place bid
            </button>
          </div>
        </form>
      </div>

      <div class="d-flex flex-column mt-4 border-top">
        <h5 class="fw-bold mt-3">Description</h5>
        <p>${listing.description}</p>
      </div>

      <div class="d-flex flex-column pt-3 pb-2">
        <h6 class="fw-bold">Tags</h6>
        <div class="d-flex gap-1" id="tagContainer">

        </div>
      </div>
      <div class="d-flex flex-column">
        <h6 class="pt-3 pb-2 fw-bold">Seller Information</h6>
        <a href="/src/pages/profile/index.html?name=${listing.seller.name}" class="d-flex align-items-center">
          <img
            src="${listing.seller.avatar}"
            class="seller-thumbnail rounded-circle p-0 border-0 me-2"
            alt="Profile picture of ${listing.seller.name}"
          />
          <div class="d-flex flex-column">
            <p class="m-0">${listing.seller.name}</p>
            <p class="m-0">${listing.seller.email}</p>
          </div>
        </a>
      </div>
      <div class="mt-5">
        <h5 class="fw-bold">All bids</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Bid Amount</th>
              <th scope="col">Name</th>
              <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody id="allBidsContainer"></tbody>
        </table>
      </div>
    </div>
  </div>`;
};
