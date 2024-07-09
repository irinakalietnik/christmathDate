function daysToChristmath() {
  let now = new Date();
  let thisYearChristmath = new Date(now.getFullYear() + 1, "00", "01");

  let countDowndays = (thisYearChristmath - now) / (24 * 60 * 60 * 1000);
  let countDownhours = ((thisYearChristmath - now) / (60 * 60 * 1000)) % 24;
  let countDownminutes = ((thisYearChristmath - now) / (60 * 1000)) % 60;
  let countDownseconds = ((thisYearChristmath - now) / 1000) % 60;

  document.getElementById("day").textContent = `${Math.ceil(countDowndays)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("hour").textContent = `${Math.ceil(countDownhours)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("minute").textContent = `${Math.ceil(countDownminutes)
    .toString()
    .padStart(2, "0")}`;
  document.getElementById("second").textContent = `${Math.ceil(countDownseconds)
    .toString()
    .padStart(2, "0")}`;
}

setInterval(daysToChristmath, 1000);
daysToChristmath();
