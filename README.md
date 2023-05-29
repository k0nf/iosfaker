# iosfaker

This library provides functionality to retrieve random device details and search for devices based on iOS versions or device models.

[![npm](https://img.shields.io/npm/v/iosfaker)](https://www.npmjs.com/package/iosfaker) [![npm](https://img.shields.io/npm/dt/iosfaker)](https://www.npmjs.com/package/iosfaker)

## 📦 Installation

You can install this library using either yarn or npm.

### yarn

```bash
yarn add iosfaker
```

### npm

```bash
npm install iosfaker
```

## 🪄 Usage

### Importing the Library

```javascript
const { getDevice, getDeviceByIOSVersion, searchDeviceByModel } = require('iosfaker');
```

### Getting Random Device Details

```javascript
const randomiPhoneDetails = getDevice('iPhone');
console.log('Random iPhone Details:', randomiPhoneDetails);
```

The `getDevice` function returns an object with random device details, such as the internal name, model name, and supported versions.

### Searching for Devices by iOS Version

```javascript
const deviceWithIOSVersion = getDeviceByIOSVersion('11', 'iPad');
if (deviceWithIOSVersion) {
  console.log('iPad with iOS Version 11:', deviceWithIOSVersion);
} else {
  console.log('No iPads found with iOS Version 11');
}
```

The `getDeviceByIOSVersion` function searches for devices in the specified category (e.g., 'iPhone', 'iPad', 'iPod', 'Watches', 'Other') that support the specified iOS version. It returns a random device that matches the criteria.

### Searching for Devices by Model

```javascript
const deviceByModel = searchDeviceByModel('iPhone X');
if (deviceByModel) {
  console.log('iPhone X:', deviceByModel);
} else {
  console.log('No device found with the model "iPhone X"');
}
```

The `searchDeviceByModel` function searches for devices in all categories (iPhone, iPad, iPod, Watches, Other) based on the specified device model. It returns the device information if a match is found.

Please note that you need to provide the correct category when calling the functions ('iPhone', 'iPad', 'iPod', 'Watches', 'Other').

# 💻 Contributing

1. Fork the repository.
2. Run the following command to update the device list:
   ```bash
   yarn update
   ```
   or
   ```bash
   npm run update
   ```
   This command will fetch the latest device information and update the device list in the library.
3. Test the changes to ensure accuracy.
4. Commit and push the changes to your forked repository.
5. Create a pull request to the main repository.

We appreciate your contributions to keep the device list up-to-date!

## 🔑 License

This project is unlicensed. See the [LICENSE](LICENSE) file for more information.