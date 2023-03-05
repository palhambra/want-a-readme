// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return "![License: MIT](https://img.shields.io/badge/license-MIT-orange)";
  } else if (license === "Mozilla Public License 2.0") {
    return "![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-red)";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return "https://opensource.org/license/mit/";
  } else if (license === "Mozilla Public License 2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "MIT") {
    return "This project is licensed under the MIT license";
  } else if (license === "Mozilla Public License 2.0") {
    return "This project is licensed under the Mozilla Public 2.0 License";
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.instructions}

## Usage

${data.usage}

## Contributors

${data.contributors}

## Tests

${data.tests}

## License

${renderLicenseSection(data.license)}
${renderLicenseLink(data.license)}

## Questions

If you have any additional questions please reach out at:

- GitHub : https://github.com/${data.username}
- Email : ${data.email}

`;
}

module.exports = generateMarkdown;
