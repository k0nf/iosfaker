const fs = require("fs");
const path = require("path");

const DEVICE_CATEGORIES = ["iPhone", "iPad", "iPod", "Watches", "Other"];

class RandomDevice {
  constructor(deviceData) {
    this.internalName = deviceData.internalName;
    this.modelName = deviceData.modelName;
    this.supportedVersions = deviceData.supportedVersions;
    this.randomVersion = this.getRandomVersion();
  }

  getRandomVersion() {
    const randomIndex = Math.floor(
      Math.random() * this.supportedVersions.length
    );
    return this.supportedVersions[randomIndex];
  }
}

const getRandom = (category) => {
  const categoryPath = path.join(__dirname, category);
  const jsonFiles = fs
    .readdirSync(categoryPath)
    .filter((file) => path.extname(file) === ".json");
  const randomIndex = Math.floor(Math.random() * jsonFiles.length);
  const randomFile = jsonFiles[randomIndex];

  const filePath = path.join(categoryPath, randomFile);
  const fileData = fs.readFileSync(filePath, "utf8");
  const deviceData = JSON.parse(fileData);

  return new RandomDevice(deviceData);
};

const getDevice = (category) => {
  const randomDevice = getRandom(category);
  return {
    internalName: randomDevice.internalName,
    modelName: randomDevice.modelName,
    supportedVersions: randomDevice.supportedVersions,
    randomVersion: randomDevice.randomVersion,
  };
};

const getDeviceByIOSVersion = (version, category) => {
  const categoryPath = path.join(__dirname, category);
  const jsonFiles = fs
    .readdirSync(categoryPath)
    .filter((file) => path.extname(file) === ".json");
  const matchingDevices = [];

  for (const jsonFile of jsonFiles) {
    const filePath = path.join(categoryPath, jsonFile);
    const fileData = fs.readFileSync(filePath, "utf8");
    const deviceData = JSON.parse(fileData);

    const matchedVersions = deviceData.supportedVersions.filter((v) =>
      v.startsWith(version)
    );
    if (matchedVersions.length > 0) {
      matchingDevices.push(
        new RandomDevice({ ...deviceData, supportedVersions: matchedVersions })
      );
    }
  }

  if (matchingDevices.length > 0) {
    const randomIndex = Math.floor(Math.random() * matchingDevices.length);
    return matchingDevices[randomIndex];
  }

  return null;
};

function searchDeviceByModel(model) {
  for (const category of DEVICE_CATEGORIES) {
    const devicesPath = path.join(__dirname, category);
    const deviceFiles = fs.readdirSync(devicesPath);

    for (const deviceFile of deviceFiles) {
      const devicePath = path.join(devicesPath, deviceFile);
      const deviceData = require(devicePath);

      if (deviceData.model === model) {
        return deviceData;
      }
    }
  }

  return null;
}

module.exports = {
  getDevice,
  getDeviceByIOSVersion,
  searchDeviceByModel,
};
