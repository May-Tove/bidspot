export const profileLink = (profile) => {
  // avatar placeholder
  let avatar = "";
  if (profile.avatar === "") {
    avatar = "../../../../images/avatar-placeholder.jpg";
  } else {
    avatar = profile.avatar;
  }

  return `<button id="profileDetail" class="d-flex align-items-center nav-link dropdown-toggle btn border-0 p-0" data-bs-toggle="dropdown" aria-expanded="false">
            <img class="img-thumbnail rounded-circle border-0 p-0 me-2" src="${avatar}" alt="Profile picture of ${profile.name}"/>
            <div class="d-flex flex-column align-items-start me-3 lh-sm">
            <span class="fw-bold m-0 p-0">${profile.name}</span>
            <span class="small text-muted m-0 p-0"><i class="fa-solid fa-coins"></i> ${profile.credits} credit</span>
            </div>
            </button>
  
          <ul class="dropdown-menu border-0">
            <li>
              <a class="dropdown-item nav-link px-3" href="/src/pages/profile/index.html?name=${profile.name}">
                <i class="fa-regular fa-circle-user"></i> View Profile
              </a>
            </li>
            <li><hr class="dropdown-divider" /></li>
            <li>
              <button class="dropdown-item nav-link px-3" id="logoutBtn"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</button>
            </li>
          </ul>`;
};
