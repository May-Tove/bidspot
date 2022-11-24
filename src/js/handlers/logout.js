import { logout } from "../api/auth/logout.js";

export function logoutListener() {
  const logoutBtn = document.querySelector("#logoutBtn");

  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      logout();
    });
  }
}
