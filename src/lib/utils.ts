import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDateNow() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthsOfYear = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const now = new Date(Date.now());

  const day = daysOfWeek[now.getDay()];
  const month = monthsOfYear[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const formattedHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour; // convert to 12-hour format
  const formattedMinute = minute.toString().padStart(2, "0"); // ensure minute is always two digits
  const ampm = hour >= 12 ? "PM" : "AM";

  return `${day}, ${month} ${date}, ${year} at ${formattedHour}:${formattedMinute} ${ampm}`;
}
