// Buttons with option to edit or delete owners post
export const options = () => {
  return `<div class="dropdown">
                <button tabindex="0" class="btn p-1" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownBtn">
                    <i class="fa-solid fa-ellipsis"></i>
                </button>
                <ul class="dropdown-menu">
                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#editListingModal"><i class="fa-regular fa-pen-to-square"></i> Edit</button></li>
                    <li><button class="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteModal"><i class="fa-regular fa-trash-can"></i> Delete</button></li>
                </ul>
            </div>`;
};
