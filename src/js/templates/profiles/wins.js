export const profileWins = (wins) => {
  return `<div class="p-3 m-2 bg-light rounded">
            <span>Listing ID: </span>
            <a class="link text-decoration-none" href="/src/pages/listings/details/index.html?id=${wins}"><i class="fa-solid fa-link"></i> ${wins}</a>
          </div>`;
};
