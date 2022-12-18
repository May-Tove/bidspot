export function dateFormatted(date) {
  // formatting date
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  return new Date(date).toLocaleDateString("en-GB", options);
}
