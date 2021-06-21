export function convertISODateToAEST(isoDate: string): string | undefined {
  try {
    const event = new Date(isoDate);
    const formatDate = event.toLocaleString("en-AU", { timeZone: "Australia/Sydney", });
    if (formatDate === "Invalid Date") throw Error("Please enter a valid date");
    return `${formatDate} AEST`;
  } catch (error) {
    console.log("Error:", error.message);
  }
}