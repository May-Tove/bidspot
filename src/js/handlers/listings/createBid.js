import { createBid } from "../../api/listings/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";

export function createBidListener() {
  const bidForm = document.querySelector("#bidForm");

  if (bidForm) {
    const id = getUrlSearchParam("id");

    bidForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const data = new FormData(form);
      const amount = JSON.parse(data.get("amount"));

      await createBid(id, { amount });
    });
  }
}
