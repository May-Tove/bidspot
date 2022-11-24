import { get, remove } from "../../storage/index.js";

export function logout() {
  remove("token");
  remove("user");

  const token = get("token");
  const user = get("user");
  if (token === null && user === null) {
    location.href = "/src/pages/profile/login/index.html";
  } else {
    alert("There was a problem logging out");
  }
}
