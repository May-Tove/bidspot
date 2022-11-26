export const allBids = (bid) => {
  // formatting date
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
  };

  const bidCreated = new Date(bid.created).toLocaleDateString("en-GB", options);

  return `<tr>
    <th scope="row"></th>
    <td>${bid.amount}</td>
    <td>${bid.bidderName}</td>
    <td>${bidCreated}</td>
  </tr>`;
};
