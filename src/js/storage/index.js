/**
 * Stores item in local storage
 * @param {string} key
 * @param {any} value
 */
export const store = (key, value) =>
  localStorage.setItem(key, JSON.stringify(value));

/**
 * Returns item from local storage
 * @param {string} key
 * @returns {any} returns parsed value from storage
 */
export const get = (key) => JSON.parse(localStorage.getItem(key));

/**
 * Deletes item from local storage
 * @param {string} key
 */
export const remove = (key) => localStorage.removeItem(key);
