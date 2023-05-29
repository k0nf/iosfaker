# iosfaker

This library provides functionality to retrieve random device details and search for devices based on iOS versions or device models.

## Installation

You can install this library using either yarn or npm.

### yarn

```bash
yarn add iosfaker
```

### npm

```bash
npm install iosfaker
```

## Usage

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

## License

This project is unlicensed. See the [LICENSE](LICENSE) file for more information.