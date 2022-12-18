import { dateFormatted } from "../../tools/index.js";

export const profileBids = (bids) => {
  // formatting date
  const created = dateFormatted(bids.created);

  // Image placeholder if original value has any errors or do not exist
  let media = "";
  if (
    bids.listing.media.length === 0 ||
    bids.listing.media === null ||
    bids.listing.media === ""
  ) {
    media = "/images/img-placeholder.jpeg";
  } else {
    media = bids.listing.media[0];
  }

  return `<div class="col-12 col-lg-6">
            <a class="bid-container text-decoration-none text-dark" href="/src/pages/listings/details/index.html?id=${bids.listing.id}">
              <div class="d-flex align-items-center justify-content-between bg-light rounded m-2 p-2">
                <div class="d-flex align-items-center">
                    <div class="img-container rounded me-2">
                        <img
                          src="${media}"
                          alt="${bids.listing.title}"
                          class="small-img rounded"
                          onerror="src='/images/img-placeholder.jpeg'"
                        />
                        </div>
                          <div>
                            <h6 class="m-0">${bids.listing.title}</h6>
                            <p class="small text-muted m-0">Placed: ${created}</p>
                          </div>
                      </div>
                  <div>
                  <span class="ms-2 text-nowrap fw-bold">$ ${bids.amount}</span>
                </div>
              </div>
            </a>
          </div>`;
};
