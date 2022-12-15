import { noResult } from "../templates/error/index.js";
import { fetchMessage } from "../templates/error/index.js";
/**
 * Error message for no results
 * @param {string} message - error message to be entered
 * @example
 * ```js
 * // no search results, no comments yet or no posts yet
 * errorContainer.innerHtml = noResultError("No comments yet");
 * ```
 */
export function noResultError(message = "No result") {
  return noResult(message);
}

/**
 * Error message for failed fetch
 * @param {string} response - Error message from response
 * @example
 * ```js
 * errorContainer.innerHtml = fetchError(response);
 * ```
 */
export async function fetchError(response) {
  let errorMessage = "";
  const error = await response.json();
  const message = error.errors[0].message;

  if (!message) {
    errorMessage = response.statusText;
  } else {
    errorMessage = message;
  }

  return fetchMessage(errorMessage);
}
