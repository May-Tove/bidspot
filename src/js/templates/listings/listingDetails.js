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
    day: "numeric",
    month: "numeric",
    year: "numeric",
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

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">

            <div class="carousel-inner" id="carouselContainer">


            </div>
            <div class="d-flex align-items-center justify-content-center gap-1 mt-2 img-indicator" id="imagesSmall"></div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" id="prevBtn">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" id="nextBtn">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
        </button>
  </div>

    </div>
  </div>
  <div class="col">
    <div class="bg-white p-3 rounded">
    <div class="d-flex align-items-top justify-content-between py-3">
      <div>
        <h1 class="fw-bold fs-3">${listing.title}</h1>
        <div class="d-flex align-items-center">
          <img
            src="${avatar}"
            class="img-thumbnail-small rounded-circle p-0 border-0 me-2"
            alt="Profile picture of ${listing.seller.name}"
          />
            <p class="m-0 small text-muted">By <span id="sellerLink">${listing.seller.name}</span> <span>&#183;</span> ${listingCreated}</p>
        </div>
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
      <div class="d-flex flex-column my-3">
        <h2 class="fw-bold fs-5">Description</h2>
        <p>${listing.description}</p>
        <div class="d-flex gap-1" id="tagContainer">
      </div>
      </div>
      <div class="mt-3" id="bidFormContainer">
      <p class="m-0"> <a href="/src/pages/profile/login/index.html">Login</a> to place a bid on this listing</p>
      </div>
      <div class="mt-5">
        <h2 class="fw-bold fs-5">All bids</h2>
          <div id="allBidsContainer"></div>
      </div>
    </div>
  </div>`;
};
