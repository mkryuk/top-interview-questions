export function reformatDate(date: string): string {
  const months: { [key: string]: string } = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12",
  };
  // Split the date string into its components
  const [day, month, year] = date.split(" ");
  // Remove the ordinal suffix and ensure day is in 2-digit format
  const dayFormatted = ("0" + day.replace(/(st|nd|rd|th)/, "")).slice(-2);
  // Use type assertion to assure TypeScript that `month` is a key of `months`
  const monthFormatted = months[month as keyof typeof months];
  // Return the formatted date string
  return `${year}-${monthFormatted}-${dayFormatted}`;
}
