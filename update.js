const fs = require("fs");
const axios = require("axios");

const fetchDevices = async () => {
  try {
    const response = await axios.get("https://api.ipsw.me/v4/devices");
    return response.data;
  } catch (error) {
    console.error("Error fetching devices:", error);
    throw error;
  }
};

const fetchSupportedVersions = async (identifier) => {
  try {
    const response = await axios.get(
      `https://api.ipsw.me/v4/device/${identifier}?type=ipsw`
    );
    const versions = response.data.firmwares.map(
      (firmware) => firmware.version
    );
    return versions;
  } catch (error) {
    console.error(
      `Error fetching supported versions for ${identifier}:`,
      error
    );
    throw error;
  }
};

const saveModelToFile = (model) => {
  let folder = "";
  if (model.internalName.startsWith("iPhone")) {
    folder = "./iPhones/";
  } else if (model.internalName.startsWith("iPad")) {
    folder = "./iPads/";
  } else if (model.internalName.startsWith("iPod")) {
    folder = "./iPods/";
  } else if (model.internalName.startsWith("Watch")) {
    folder = "./Watches/";
  } else if (model.internalName.startsWith("AppleTV")) {
    folder = "./AppleTVs/";
  } else {
    folder = "./Other/";
  }
  const filename = `${folder}${model.internalName}.json`;
  const json = JSON.stringify(model);

  fs.writeFile(filename, json, "utf8", (err) => {
    if (err) {
      console.error(`Error saving ${filename}:`, err);
      throw err;
    }
    console.log(`${filename} has been saved.`);
  });
};

const generateModelFiles = async () => {
  const devices = await fetchDevices();

  for (const device of devices) {
    const { identifier, name } = device;
    const supportedVersions = await fetchSupportedVersions(identifier);

    const model = {
      internalName: identifier,
      modelName: name,
      supportedVersions,
    };

    saveModelToFile(model);
  }
};

generateModelFiles();
