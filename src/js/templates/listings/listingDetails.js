import { dateFormatted, countdown } from "../../tools/index.js";

export const listingDetails = (listing) => {
  // Formatting date
  const listingCreated = dateFormatted(listing.created);

  // Countdown timer
  const timer = countdown(listing.endsAt);

  // Get the highest bid from the array (last bid)
  let highestBid = "No bids";
  if (listing._count.bids !== 0) {
    const sortedListings = listing.bids.sort((a, b) => a.amount - b.amount);
    const price = sortedListings.pop().amount;
    highestBid = `$ ${price}`;
  }

  // Avatar placeholder if original value has any errors or do not exist
  let avatar = "";
  if (
    listing.seller.avatar.length === 0 ||
    listing.seller.avatar === null ||
    listing.seller.avatar === ""
  ) {
    avatar = "/images/img-placeholder.jpeg";
  } else {
    avatar = listing.seller.avatar;
  }

  return `<div class="col-12 col-lg-5">
            <div class="row">
              <div id="mediaCarousel" class="carousel slide">
                <div class="carousel-inner" id="carouselContainer"></div>
                  <button class="carousel-control-prev" type="button" data-bs-target="#mediaCarousel" data-bs-slide="prev" id="prevBtn">
                  <i class="carousel-prev fs-2 rounded-circle p-1 text-center d-flex align-items-center justify-content-center fa-solid fa-chevron-left"></i>
                    <span class="visually-hidden">Previous</span>
                  </button>
                  <button class="carousel-control-next" type="button" data-bs-target="#mediaCarousel" data-bs-slide="next" id="nextBtn">
                    <i class="carousel-next fs-2 rounded-circle p-1 text-center d-flex align-items-center justify-content-center fa-solid fa-chevron-right"></i>
                    <span class="visually-hidden">Next</span>
                  </button>
                </div>
                <div class="d-flex flex-wrap align-items-center justify-content-center gap-2 mt-2" id="imagesSmall"></div>
              </div>
            </div>
            <div class="col mb-5">
              <div class="bg-white p-3 rounded">
                <div class="d-flex align-items-top justify-content-between py-3">
                  <div>
                      <h1 class="fw-bold fs-2">${listing.title}</h1>
                      <div class="d-flex align-items-center">
                        <img
                          src="${avatar}"
                          class="img-thumbnail-small rounded-circle p-0 border-0 me-2"
                          alt="Profile picture of ${listing.seller.name}"
                          onerror="src='/images/avatar-placeholder.jpg'"
                        />
                        <p class="m-0 small text-muted">By <span id="sellerLink">${listing.seller.name}</span> <span>&#183;</span> ${listingCreated}</p>
                      </div>
                    </div>
                    <div id="dropdownContainer"></div>
                </div>
                <div class="bg-light rounded p-4 d-flex flex-column gap-4 flex-sm-row align-items-center justify-content-around my-4">
                  <div class="d-flex flex-column align-items-center justify-content-center">
                    <p class="small m-0">Total Bids</p>
                    <span class="fw-bold">${listing._count.bids}</span>
                  </div>
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <p class="small m-0">Highest Bid</p>
                  <span class="fw-bold">${highestBid}</span>
                </div>
                <div class="d-flex flex-column align-items-center justify-content-center">
                  <p class="small m-0">Auction Ends In</p>
                  <div class="d-flex align-items-center gap-1 fw-bold">
                  ${timer}
                  </div>
                </div>
              </div>
              <div class="d-flex flex-column my-3">
                <h2 class="fw-bold fs-5">Description</h2>
                <p>${listing.description}</p>
                  <div class="d-flex gap-1" id="tagContainer"></div>
              </div>
            <div class="mt-3" id="bidFormContainer">
              <p class="m-0"> <a href="/src/pages/profile/login/index.html" class="link">Login</a> to place a bid on this listing</p>
            </div>
            <div class="mt-5">
              <h3 class="fw-bold fs-5">All bids</h3>
            <div id="allBidsContainer"></div>
          </div>
        </div>
      </div>`;
};
