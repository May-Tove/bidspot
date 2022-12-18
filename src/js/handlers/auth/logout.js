import { logout } from "../../api/auth/logout.js";

/**
 * This will log out a user when clicking the logout button
 */
export function logoutListener() {
  const logoutBtn = document.querySelector("#logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logout();
    });
  }
}
