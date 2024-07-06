function daysToChristmath() {
  let now = new Date();
  let thisYearChristmath = new Date(now.getFullYear(), "11", "31");

  let days = (thisYearChristmath - now) / (24 * 60 * 60 * 1000);
  let hours = ((thisYearChristmath - now) / (60 * 60 * 1000)) % 24;
  let minutes = ((thisYearChristmath - now) / (60 * 1000)) % 60;
  let seconds = ((thisYearChristmath - now) / 1000) % 60;

  document.getElementById("day").textContent = `${Math.ceil(days)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("hour").textContent = `${Math.ceil(hours)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("minute").textContent = `${Math.ceil(minutes)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("second").textContent = `${Math.ceil(seconds)
    .toString()
    .padStart(2, "0")}`;
}

setInterval(daysToChristmath, 1000);
daysToChristmath();
