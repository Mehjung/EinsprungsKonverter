// dateFunctions.js

export function calculateWeeksBetweenDates(startDate, endDate) {
  function parseDate(dateString) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
  }

  const start = parseDate(startDate);
  const end = parseDate(endDate);

  // Find the day of the week for the start and end dates
  const startDay = start.getDay();
  const endDay = end.getDay();

  // Calculate the total number of days between the two dates
  const timeDifference = end - start;
  const totalDays = timeDifference / (1000 * 60 * 60 * 24) + 1;

  // Calculate the number of full weeks between the two dates
  let fullWeeks = Math.floor(totalDays / 7);

  // Check if the partial week at the beginning should be counted
  if (startDay !== 1) {
    // If the start day is not Monday
    fullWeeks += 1;
  }

  // Check if the partial week at the end should be counted
  if (endDay !== 0) {
    // If the end day is not Sunday
    fullWeeks += 1;
  }

  return fullWeeks;
}

export function calculateWeeksModulo(wochen, param) {
  const result = wochen % param;
  return result === 0 ? param : result;
}

export function calculateResult(wochenanzahl, ziel_einsprungs_woche, wochen) {
  if (wochen === 1) {
    return ziel_einsprungs_woche;
  } else if (wochen <= ziel_einsprungs_woche) {
    return ziel_einsprungs_woche - wochen + 1;
  } else {
    let x = wochenanzahl - (wochen - ziel_einsprungs_woche) + 1;
    return x;
  }
}
