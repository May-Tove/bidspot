import { removeListing } from "../../api/listings/index.js";
import { getUrlSearchParam } from "../../tools/urlSearchParams.js";

/**
 * Event listener to delete a post on button click
 */
export async function removeListingListener() {
  const deleteBtn = document.querySelector("#deleteBtn");

  const id = getUrlSearchParam("id");

  if (deleteBtn) {
    deleteBtn.addEventListener("click", async () => {
      await removeListing(id);
    });
  }
}
