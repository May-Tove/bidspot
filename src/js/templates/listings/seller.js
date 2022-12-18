// Link to profile page from the listing details, only to be displayed if a user is logged in
export const sellerLink = (name) => {
  return `<a href="/src/pages/profile/index.html?name=${name}" class="link">${name}</a>`;
};
