/**
 * Function that format date
 * @param {number} date - date to be formatted
 */
export function dateFormatted(date) {
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return new Date(date).toLocaleDateString("en-GB", options);
}
