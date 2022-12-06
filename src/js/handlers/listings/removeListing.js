import { getListing, removeListing } from "../../api/listings/index.js";

/**
 * Event listener to delete a post on button click
 */
export async function removeListingListener() {
  const deleteBtn = document.querySelector("#deleteBtn");

  const url = new URL(location.href);
  const id = url.searchParams.get("id");

  if (deleteBtn) {
    const listing = await getListing(id);
    listing.id = id;

    deleteBtn.addEventListener("click", async () => {
      try {
        await removeListing(id);
      } catch {
        return alert(
          "There was a problem deleting this listing, please refresh the page and try again"
        );
      }
    });
  }
}
