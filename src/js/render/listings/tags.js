import { tags } from "../../templates/listings/tags.js";

export async function renderTags(allTags) {
  const tagContainer = document.querySelector("#tagContainer");

  if (tagContainer) {
    const output = allTags.map(tags);

    if (allTags.length === 0) {
      tagContainer.innerHTML = " ";
    } else {
      tagContainer.innerHTML = output.join("");
    }
  }
}
