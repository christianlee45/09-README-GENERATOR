// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.TITLE}



  ## Description📝
 ${data.DESCRIPTION}

 ## Table of Contents
- [Description](#DESCRIPTION)
- [Installation](#INSTALLATION)
- [Usage](#USAGE)
- [Contributing](#CONTRIBUTING)
- [Tests](#TESTS)



## INSTALLATION🔄
${data.INSTALLATION}

## USAGE🗄️
 ${data.USAGE}

 

## CONTRIBUTING👨‍🏫
 ${data.CONTRIBUTING}

## TESTS🧪🧪
✏️ ${data.TESTS}
`;
}

module.exports = generateMarkdown;
