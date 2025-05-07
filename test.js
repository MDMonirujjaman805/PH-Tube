function getTime(time) {
  let hour = parseInt(time / 3600);
  const remainingSeconds = parseInt(time % 3600);
  let minute = parseInt(remainingSeconds / 60);
  let second = parseInt(remainingSeconds % 60);
  return `${hour} Hour ${minute} Minute ${second} Second ago`;
}
console.log(getTime(57200));

function getYear(hours) {
  let year = Math.floor(hours / 8760);
  let remainingHours = hours % 8760;
  let months = Math.floor(remainingHours / 720);
  let weeks = Math.floor(remainingHours / 168);
  let day = Math.floor(remainingHours / 24);
  return `${year}Year ${months}Months ${weeks}Weeks ${day}Day ago`;
}
console.log(getYear(10000));