let display = document.querySelector("#display");
let days = document.querySelector("#days");
let previous = document.querySelector(".left");
let next = document.querySelector(".right");

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

function calendar() {
  days.innerHTML = ""; // Clear the previous calendar days

  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  let firstDayIndex = firstDay.getDay();
  let numberOfDays = lastDay.getDate();
  let nextDays = 7 - new Date(year, month, numberOfDays).getDay();

  // Adjust for Sunday being the first day in some locales
  firstDayIndex = firstDayIndex === 0 ? 7 : firstDayIndex;

  // Display the current month and year
  display.textContent = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric"
  });

  // Add days of the previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstDayIndex - 1; i > 0; i--) {
    const div = document.createElement("div");
    div.className = "inactive";
    div.textContent = prevMonthLastDay - i + 1;
    days.appendChild(div);
  }

  // Add days of the current month
  for (let j = 1; j <= numberOfDays; j++) {
    const div = document.createElement("div");
    let currDate = new Date(year, month, j);
    div.dataset.date = currDate.toDateString();
    div.textContent = j;
    days.appendChild(div);

    if (
      currDate.getFullYear() === new Date().getFullYear() &&
      currDate.getMonth() === new Date().getMonth() &&
      currDate.getDate() === new Date().getDate()
    ) {
      div.classList.add("current-date");
    }
  }

  // Add days of the next month
  for (let i = 1; i <= nextDays; i++) {
    const div = document.createElement("div");
    div.className = "inactive";
    div.textContent = i;
    days.appendChild(div);
  }
}

calendar();

previous.addEventListener("click", () => {
  if (month === 0) {
    month = 11;
    year--;
  } else {
    month--;
  }
  date = new Date(year, month);
  calendar();
});

next.addEventListener("click", () => {
  if (month === 11) {
    month = 0;
    year++;
  } else {
    month++;
  }
  date = new Date(year, month);
  calendar();
});
