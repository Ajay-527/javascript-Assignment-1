let year = prompt("Enter the year");
year = parseInt(year);

if (year % 4 === 0) {
  console.log("Given year " + year + " is leap year");
} else {
  console.log("Given year " + year + " is not leap year");
}
