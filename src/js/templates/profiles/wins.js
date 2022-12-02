export const profileWins = (wins) => {
  return `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Listing ID</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">1</th>
        <td><a
        href="/src/pages/listings/details/index.html?id=${wins}"
      >
      ${wins}
      </a>
      </td>
      </tr>
    </tbody>
  </table>`;
};
