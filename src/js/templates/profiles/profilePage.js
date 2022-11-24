export const profilePage = (profile) => {
  return `<div class="bg-white rounded py-4">
<div
  class="d-flex flex-column align-items-center justify-content-center mb-3"
>
  <div class="position-relative">
    <img
      src="${profile.avatar}"
      alt="Profile picture of ${profile.name}"
      class="profile-picture rounded-circle"
    />
    <button
      class="btn btn-edit btn-primary rounded-circle position-absolute bottom-0 end-0"
      data-bs-toggle="tooltip"
      data-bs-placement="bottom"
      data-bs-title="Edit Profile Picture"
    >
      <span
        class="d-flex align-items-center justify-content-center"
        data-bs-toggle="modal"
        data-bs-target="#editProfileModal"
        id="editProfileBtn"
        ><i class="fa-regular fa-pen-to-square"></i
      ></span>
    </button>
  </div>

  <h5 class="mt-2 mb-0 fw-bold">${profile.name}</h5>
  <p class="text-muted">${profile.email}</p>
</div>

<div
  class="d-flex align-items-center justify-content-around p-2 mb-3"
>
  <p class="m-0">
    <i class="fa-solid fa-coins"></i> Total Credit
  </p>
  <span class="fw-bold number">${profile.credits}</span>
</div>
</div>`;
};
