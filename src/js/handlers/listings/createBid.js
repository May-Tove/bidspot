import { createBid } from "../../api/listings/index.js";

export function createBidListener() {
  const bidForm = document.querySelector("#bidForm");

  if (bidForm) {
    const url = new URL(location.href);
    const id = url.searchParams.get("id");
    bidForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const amount = JSON.parse(data.get("amount"));

      createBid(id, { amount });
    });
  }
}
