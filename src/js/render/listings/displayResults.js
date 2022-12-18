import { noResultError } from "../../error/error.js";

export function renderResult(result, container, template) {
  const output = result.map(template);

  if (container) {
    if (result.length === 0) {
      container.innerHTML = noResultError("No results");
    } else {
      container.innerHTML = output.join("");
    }
  }
}
