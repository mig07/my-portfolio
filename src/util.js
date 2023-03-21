const MY_BIRTHDAY = "07/07/1998";

// Get years of age from birthday date (mm/dd/yyyy)
export default function getYearsOfAge(dateOfBirth = MY_BIRTHDAY) {
  const birthDayDate = new Date(dateOfBirth);
  const monthDiff = Date.now() - birthDayDate.getTime();
  const monthDiffDate = new Date(monthDiff);
  const year = monthDiffDate.getUTCFullYear();
  return Math.abs(year - 1970);
}
