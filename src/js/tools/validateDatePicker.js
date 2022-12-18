// Set min attribute to todays date for date picker in create new listing form.
// Code from https://stackoverflow.com/questions/17182544/disable-certain-dates-from-html5-datepicker
export function validateDate() {
  const today = new Date().toISOString().split("T")[0];
  document.getElementsByName("endsAt")[0].setAttribute("min", today);
}
