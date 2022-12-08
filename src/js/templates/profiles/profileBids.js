export const profileBids = (bids) => {
  return `
  <div>
    <a class="text-decoration-none" href="/src/pages/listings/details/index.html?id=${bids.listing.id}">
      <div class="d-flex align-items-center justify-content-between bg-light rounded p-2 my-1">
        <div class="d-flex align-items-center">
            <div class="img-container rounded">
              <img
                src="${bids.listing.media[0]}"
                alt="${bids.listing.title}"
                class="small-img rounded me-3"
              />
            </div>
          <div>
            <h6 class="m-0">${bids.listing.title}</h6>
            <p class="small text-muted m-0">${bids.created}</p>
        </div>
        <div>
          <span>$ ${bids.amount}</span>
        </div>
      </div>
    </a>
  </div>`;
};
