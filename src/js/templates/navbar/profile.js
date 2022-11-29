export const profileLink = (profile) => {
  // avatar placeholder
  let avatar = "";
  if (profile.avatar === "") {
    avatar = "../../../../images/avatar-placeholder.jpg";
  } else {
    avatar = profile.avatar;
  }

  return `<button id="profileDetail" class="nav-link dropdown-toggle btn border-0" data-bs-toggle="dropdown" aria-expanded="false">
            <img class="img-thumbnail rounded-circle border-0 p-0" src="${avatar}" alt="Profile picture of ${profile.name}"/>
            ${profile.name}
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
