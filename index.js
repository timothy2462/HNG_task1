// Logic to get the day of the week
const current_day_week = document.getElementById("dayWeek");

const date = new Date();

const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const dayOfWeek = daysOfWeek[date.getDay()];

current_day_week.innerHTML = dayOfWeek;

// displaying the UTC in milliseconds
const UTC_time = document.getElementById("utcTime");
const currentUTCMilliseconds = new Date().getTime();
UTC_time.innerHTML = `${new Date(
  currentUTCMilliseconds
).toLocaleString()}  ${currentUTCMilliseconds}`;
