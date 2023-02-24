/** convert seconds to 00:00:00 format */
export function toTimeString(totalSeconds?: any) {
  if (typeof totalSeconds !== "number") return null;

  const totalMs = totalSeconds * 1000;
  const result = new Date(totalMs).toISOString().slice(11, 19);

  return result;
}

export function dateInPast(firstDate: Date, secondDate: Date = new Date()) {
  return firstDate.setHours(0, 0, 0, 0) <= secondDate.setHours(0, 0, 0, 0);
}
