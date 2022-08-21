// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];

function findMatching(drivers, str) {
  return drivers.filter(function (driver) {
    return driver.toLowerCase() === str.toLowerCase();
  });
}
// console.log(findMatching(drivers, "Bobby")

function fuzzyMatch(drivers, str) {
  return drivers.filter(function (getDriver) {
    return (
      getDriver.toLowerCase().substring(0, str.length) === str.toLowerCase()
    );
  });
}
function matchName(drivers, str) {
    return drivers.filter(function (driverProp) {
      return driverProp.name === str;
    });
  }