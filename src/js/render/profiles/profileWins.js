import { profileWins } from "../../templates/index.js";
import { renderResult } from "../listings/displayResults.js";

export async function renderWins(profile) {
  const winsContainer = document.querySelector("#winListings");
  const winCount = document.querySelector("#winCount");

  const wins = profile.wins;

  renderResult(wins, winsContainer, profileWins);
  winCount.innerHTML = `(${profile.wins.length})`;
}
