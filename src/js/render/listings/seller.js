import { isLoggedIn } from "../../api/auth/state.js";
import { sellerLink } from "../../templates/index.js";

export function activateSellerLink(seller) {
  const linkContainer = document.querySelector("#sellerLink");

  if (isLoggedIn) {
    linkContainer.innerHTML = sellerLink(seller);
  }
}
