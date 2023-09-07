// Описан в документации
import flatpickr from "flatpickr";
// Дополнительный импорт стилей
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

function addLeadingZero(value) {
  return String(value).padStart(2, "0");
}

function calculateTimeLeft(targetDate) {
  const now = new Date().getTime();
  const timeLeftMs = targetDate - now;

  if (timeLeftMs < 0) {
    
    Notiflix.Notify.warning("Please choose a date in the future");
    return null;
  }

  const timeLeft = convertMs(timeLeftMs);

  return {
    days: addLeadingZero(timeLeft.days),
    hours: addLeadingZero(timeLeft.hours),
    minutes: addLeadingZero(timeLeft.minutes),
    seconds: addLeadingZero(timeLeft.seconds),
  };
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor((ms % hour) / minute);
  const seconds = Math.floor((ms % minute) / second);

  return { days, hours, minutes, seconds };
}

const datetimePicker = document.getElementById("datetime-picker");
flatpickr(datetimePicker, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose: (selectedDates) => {
    const targetDate = selectedDates[0].getTime();
    const startButton = document.querySelector("[data-start]");

    if (calculateTimeLeft(targetDate)) {
      startButton.disabled = false;
    } else {
      startButton.disabled = true;
    }
  },
});

const startButton = document.querySelector("[data-start]");
const daysElement = document.querySelector("[data-days]");
const hoursElement = document.querySelector("[data-hours]");
const minutesElement = document.querySelector("[data-minutes]");
const secondsElement = document.querySelector("[data-seconds]");

let countdownInterval;

startButton.addEventListener("click", () => {
  const targetDate = new Date(datetimePicker.value).getTime();
  const timeLeft = calculateTimeLeft(targetDate);

  if (timeLeft) {
    startButton.disabled = true; 

    countdownInterval = setInterval(() => {
      const timeLeft = calculateTimeLeft(targetDate);

      if (!timeLeft) {
        clearInterval(countdownInterval);
      } else {
        daysElement.textContent = timeLeft.days;
        hoursElement.textContent = timeLeft.hours;
        minutesElement.textContent = timeLeft.minutes;
        secondsElement.textContent = timeLeft.seconds;
      }
    }, 1000);
  }
});