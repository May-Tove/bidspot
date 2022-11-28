export const allBids = (bid) => {
  // formatting date
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const bidCreated = new Date(bid.created).toLocaleDateString("en-GB", options);

  return `<div class="d-flex align-items-center justify-content-between py-2 px-3 my-2 bg-light rounded">
    <div class="d-flex flex-column">
    <a href="/src/pages/profile/index.html?name=${bid.bidderName}" class="m-0 text-decoration-none">${bid.bidderName}</a>
    <p class="m-0 small text-muted">${bidCreated}</p>
    </div>
    <p class="m-0 fw-bold">${bid.amount} $</p>
  </div>`;
};
