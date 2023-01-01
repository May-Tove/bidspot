import { profileWins } from "../../templates/index.js";
import { renderResult } from "../listings/displayResults.js";

/**
 * Render all wins a user has from bidding on listings
 * @param {object} profile - profile object to access the wins
 * @example
 * ```js
 * async function renderProfile() {
 *
 * if (isLoggedIn && profileContainer) {
 *    const name = getUrlSearchParam("name");
 *    const profile = await getProfile(name);
 *
 *    const wins = profile.wins;
 *
 * renderWins(wins);
 * }
 * }
 * ```
 */
export async function renderWins(profile) {
  const winsContainer = document.querySelector("#winListings");
  const winCount = document.querySelector("#winCount");

  const wins = profile.wins;

  renderResult(wins, winsContainer, profileWins, "No wins yet");
  winCount.innerHTML = `(${profile.wins.length})`;
}
