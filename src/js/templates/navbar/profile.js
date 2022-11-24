export const profileNav = (profile) => {
  return `<img
  class="img-thumbnail rounded-circle border-0 p-0"
  src="${profile.avatar}"
  alt="Profile picture of ${profile.name}"
/>
${profile.name}`;
};
