import { get } from "../../storage/index.js";

export const profilePage = (profile) => {
  // avatar placeholder
  let avatar = "";
  if (profile.avatar === "") {
    avatar = "../../../../images/avatar-placeholder.jpg";
  } else {
    avatar = profile.avatar;
  }

  const loggedInUser = get("user").name;
  let editBtn = "";

  if (loggedInUser !== profile.name) {
    editBtn = `<button class="d-none">
    <span><i class="fa-regular fa-pen-to-square"></i></span>
  </button>`;
  } else {
    editBtn = `<button
    class="btn btn-edit btn-primary rounded-circle position-absolute bottom-0 end-0"
    type="button"
    data-bs-toggle="modal"
    data-bs-target="#editProfileModal"
    id="editProfileBtn"
  >
    <span class="d-flex align-items-center justify-content-center">
      <i class="fa-regular fa-pen-to-square"></i>
      </span>
  </button>`;
  }

  return `
  <div class="w-100 bg-white rounded p-4">
    <div class="d-flex flex-column align-items-center justify-content-center mb-3">
        <div class="position-relative">
          <img
            src="${avatar}"
            alt="Profile picture of ${profile.name}"
            class="profile-picture rounded-circle"
          />
          ${editBtn}
        </div>
        <h1 class="mt-2 mb-0 fw-bold fs-5">${profile.name}</h1>
        <a href="mailto: ${profile.email}" class="text-muted">${profile.email}</a>
      </div>
      <div class="d-flex flex-row flex-md-column flex-lg-row align-items-center justify-content-around p-3 bg-light rounded">
        <div class="d-flex flex-column align-items-center">
          <p class="m-0 small text-muted">Credit</p>
          <span class="fw-bold number">${profile.credits}</span>
        </div>
        <div class="d-flex flex-column align-items-center">
          <p class="m-0 small text-muted">Listings</p>
          <span class="fw-bold number">${profile._count.listings}</span>
        </div>
      <div class="d-flex flex-column align-items-center">
        <p class="m-0 small text-muted">Wins</p>
        <span class="fw-bold number">${profile.wins.length}</span>
      </div>
    </div>
  </div>`;
};
