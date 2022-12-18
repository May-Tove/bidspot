/**
 * Function that takes the current time and subtracts the end date for a listing, the gap will be displayed as a countdown timer
 * @param {number} date - End date for a listing
 */
export const countdown = (date) => {
  const countDate = new Date(date).getTime();

  const now = new Date().getTime();
  const gap = countDate - now;

  const second = 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinutes = Math.floor((gap % hour) / minutes);

  if (gap <= 0) {
    return `<p class="m-0 text-danger">Auction has ended</p>`;
  } else {
    return `<p class="m-0"><i class="fa-regular fa-clock"></i> ${textDay}d ${textHour}h ${textMinutes}m</p>`;
  }
};
