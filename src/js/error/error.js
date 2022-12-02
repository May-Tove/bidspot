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
  return `<div class='alert alert-danger p-2' role="alert">${message}</div>`;
}
