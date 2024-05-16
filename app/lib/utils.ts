import { MonthNames } from "./enum";

export function getFormattedDate(dateString: string): string {
  const date = new Date(dateString);
  const monthName = MonthNames[date.getMonth()];
  const day = date.getDate();
  const year = date.getFullYear();
  const newDate = `${monthName} ${day}, ${year}`;
  return newDate;
}