export const profileWins = (wins, index) => {
  const winNumber = index + 1;
  return `
  <tr>
    <th scope="row">${winNumber}</th>
      <td>
        <a href="/src/pages/listings/details/index.html?id=${wins}">${wins}</a>
      </td>
  </tr>`;
};
