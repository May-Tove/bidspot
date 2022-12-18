import { dateFormatted } from "../../tools/index.js";

export const allBids = (bid) => {
  // formatting date
  const bidCreated = dateFormatted(bid.created);

  return `<div class="d-flex align-items-center justify-content-between py-2 px-3 my-2 bg-light rounded">
            <div class="d-flex flex-column">
              <p class="m-0">${bid.bidderName}</p>
              <p class="m-0 small text-muted">${bidCreated}</p>
            </div>
            <p class="m-0 fw-bold">$ ${bid.amount}</p>
          </div>`;
};
