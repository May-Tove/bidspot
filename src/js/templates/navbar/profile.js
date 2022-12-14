import { getUrlSearchParam } from "../../tools/index.js";

export const profileLink = (profile) => {
  // Add active state to navbar link if you are on logged in users profile page
  const name = getUrlSearchParam("name");

  let activeClass = "";
  if (name === profile.name) {
    activeClass = "active";
  }

  return `<button tabindex="0" id="profileDetail" class="d-flex align-items-center nav-link dropdown-toggle btn border-0 ${activeClass}" data-bs-toggle="dropdown" aria-expanded="false">
            <img class="img-thumbnail rounded-circle border-0 p-0 me-2" src="${profile.avatar}" alt="Profile picture of ${profile.name}" onerror="src='/images/avatar-placeholder.jpg'"/>
              <div class="d-flex flex-column align-items-start me-3 lh-sm">
                <span class="m-0 p-0">${profile.name}</span>
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
