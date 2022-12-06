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
  return ` <div class="w-100 p-2 mt-3 flex-column justify-content-center align-items-center">
    <p class="mb-0 fw-bold text-muted text-center small">${message}</p>
    </div>`;
}

/**
 * Error message for failed authentication
 * @param {string} message - error message to be entered
 * @example
 * ```js
 * errorContainer.innerHtml = authError("Invalid password or username");
 * ```
 */
export function authError(message) {
  return `<div class='p-2' id="fetchError">${message}</div>`;
}

export function fetchError(
  message = "An unexpected error occurred, please refresh the page and try again"
) {
  return `<div class="container d-flex align-items-center justify-content-center mt-5 py-4 rounded" id="fetchError">
    <div class="row d-flex align-items-center justify-content-center">
   <p class="fw-bold text-center m-0"><i class="fa-solid fa-triangle-exclamation"></i> ${message}</p>
   </div>
  </div>
  `;
}
