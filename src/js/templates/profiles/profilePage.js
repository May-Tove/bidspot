import { get } from "../../storage/index.js";

export const profilePage = (profile) => {
  // Avatar placeholder if original value has any errors or do not exist
  let avatar = "";
  if (profile.avatar === null || profile.avatar === "") {
    avatar = "/images/avatar-placeholder.jpg.jpeg";
  } else {
    avatar = profile.avatar;
  }

  // Only display edit button on the logged in users profile
  const loggedInUser = get("user").name;

  let editBtn = "";
  if (loggedInUser === profile.name) {
    editBtn = `<button 
                  class="btn btn-primary rounded-circle position-absolute bottom-0 end-0 m-1"
                  type="button"
                  data-bs-toggle="modal"
                  data-bs-target="#editProfileModal"
                  aria-label="Edit avatar button"
                  id="editProfileBtn"
                >
                    <span class="d-flex align-items-center justify-content-center">
                      <i class="fa-regular fa-pen-to-square"></i>
                    </span>
                </button>`;
  }

  return `
    <div class="d-flex flex-column align-items-center justify-content-center text-center bg-white px-4 py-3 rounded w-100 mb-3">
        <div class="position-relative">
          <img
            src="${avatar}"
            alt="Profile picture of ${profile.name}"
            class="profile-picture rounded-circle"
            onerror="src='/images/avatar-placeholder.jpg'"
          />
          ${editBtn}
        </div>
        <div class="d-flex flex-column">
          <h1 class="mt-2 mb-0 fw-bold fs-2">${profile.name}</h1>
          <a href="mailto: ${profile.email}" class="link">${profile.email}</a>
          <span class="fw-bold fs-6 number pt-2"><i class="fa-solid fa-coins"></i> ${profile.credits} credit</span>
        </div>
    </div>`;
};
