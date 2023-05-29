const { getDevice, getDeviceByIOSVersion } = require("iosfaker");

const randomiPhoneDetails = getDevice("iPhone");
console.log("Random iPhone Details:", randomiPhoneDetails);

const deviceWithIOSVersion = getDeviceByIOSVersion("16", "iPhone");
if (deviceWithIOSVersion) {
  console.log(
    `Random iPad with a specified iOS version: `,
    deviceWithIOSVersion
  );
} else {
  console.log(`No iPads found with the specified iOS Version`);
}

const deviceByModel = searchDeviceByModel("iPhone X");
if (deviceByModel) {
  console.log("iPhone X:", deviceByModel);
} else {
  console.log('No device found with the model "iPhone X"');
}
