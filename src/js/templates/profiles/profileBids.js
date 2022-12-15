export const profileBids = (bids) => {
  // image placeholder
  let image = "";
  if (bids.listing.media.length === 0) {
    image = "/images/img-placeholder.jpeg";
  } else {
    image = bids.listing.media[0];
  }

  // formatting date
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  const created = new Date(bids.created).toLocaleDateString("en-GB", options);

  return `<div class="col-12 col-lg-6">
            <a class="bid-container text-decoration-none text-dark" href="/src/pages/listings/details/index.html?id=${bids.listing.id}">
              <div class="d-flex align-items-center justify-content-between bg-light rounded m-2 p-2">
                <div class="d-flex align-items-center">
                    <div class="img-container rounded me-2">
                        <img
                          src="${image}"
                          alt="${bids.listing.title}"
                          class="small-img rounded"
                        />
                        </div>
                          <div>
                            <h6 class="m-0">${bids.listing.title}</h6>
                            <p class="small text-muted m-0">${created}</p>
                          </div>
                      </div>
                  <div>
                  <span class="ms-2 text-nowrap fw-bold">$ ${bids.amount}</span>
                </div>
              </div>
            </a>
          </div>`;
};
