export const listingDetails = (listing) => {
  // avatar placeholder
  let avatar = "";
  if (listing.seller.avatar === "") {
    avatar = "../../../../images/avatar-placeholder.jpg";
  } else {
    avatar = listing.seller.avatar;
  }

  // formatting date
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const listingCreated = new Date(listing.created).toLocaleDateString(
    "en-GB",
    options
  );

  const listingEnds = new Date(listing.endsAt).toLocaleDateString(
    "en-GB",
    options
  );

  // Get the highest bid from the array (last bid)
  let highestBid = "N/A";
  if (listing._count.bids !== 0) {
    highestBid = listing.bids.pop().amount;
  }

  return ` 
  <div class="col-12 col-lg-5">
    <div class="row">
        <div>
        <img
        src="${listing.media[0]}"
        alt="Image of ${listing.title}"
        class="w-100 mb-2 mb-md-4 shadow-1-strong rounded"/>
        </div>
        <div class="d-flex align-items-center justify-content-center gap-1" id="carouselContainer"></div>
    </div>
  </div>
  <div class="col">
    <div class="bg-white p-3 rounded">
    <div class="d-flex align-items-top justify-content-between py-3">
      <div>
        <h1 class="fw-bold fs-3">${listing.title}</h1>
        <a href="/src/pages/profile/index.html?name=${listing.seller.name}" class="d-flex align-items-center text-decoration-none">
          <img
            src="${avatar}"
            class="img-thumbnail-small rounded-circle p-0 border-0 me-2"
            alt="Profile picture of ${listing.seller.name}"
          />
            <p class="m-0 small text-muted">By ${listing.seller.name} <span>&#183;</span> ${listingCreated}</p>
        </a>
      </div>
      <div id="dropdownContainer"></div>
    </div>
      <div
        class="bg-light rounded p-4 d-flex flex-column gap-4 flex-sm-row align-items-center justify-content-around my-4"
      >
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="small m-0">Total Bids</p>
          <span class="fw-bold">${listing._count.bids}</span>
        </div>
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="small m-0">Highest Bid</p>
          <span class="fw-bold">${highestBid}</span>
        </div>
        <div
          class="d-flex flex-column align-items-center justify-content-center"
        >
          <p class="small m-0">Auction Ends</p>
          <span class="fw-bold">${listingEnds}</span>
        </div>
      </div>
      <div class="my-3">
        <h2 class="fw-bold fs-5" id="bidFormContainer">Place a bid</h2>

      </div>

      <div class="d-flex flex-column mt-4">
        <h2 class="fw-bold mt-3 fs-5">Description</h2>
        <p>${listing.description}</p>
        <div class="d-flex gap-1" id="tagContainer">
      </div>
      </div>
      <div class="mt-5">
        <h2 class="fw-bold fs-5">All bids</h2>
          <div id="allBidsContainer"></div>
      </div>
    </div>
  </div>`;
};
