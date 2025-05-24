const get_work_duration = (work_period: string) => {
  if (work_period.includes("Present")) return null;
  const [start, end] = work_period.split(" - ");
  const parseDate = (str: string) => {
    const [month, year] = str.split(" ");
    return new Date(`${month} 1, ${year}`);
  };
  const startDate = parseDate(start);
  const endDate = parseDate(end);
  let months =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth());
  const years = Math.floor(months / 12);
  months = months % 12;
  const yearStr = years > 0 ? `${years} year${years > 1 ? "s" : ""}` : "";
  const monthStr = months > 0 ? `${months} month${months > 1 ? "s" : ""}` : "";
  return [yearStr, monthStr].filter(Boolean).join(" ");
};

export default get_work_duration;
