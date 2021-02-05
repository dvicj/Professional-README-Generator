// TODO: Create a function that returns a license badge based on which license is passed in
const {makeBadge, ValidationError} = require("badge-maker"); 



// If there is no license, return an empty string
const renderLicenseBadge = (templateData, license) => {
  if (!license) {
    return ""; 
  }
  return `
  ![license image](https://img.shields.io/static/v1?label=license&message=${templateData.license}&color=lightgrey)
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (templateData, license) => {
  if (!license) {
    return ""; 
  }
  return `
    [${templateData.license}](opensource.org/license/${templateData.license})
  `
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (templateData, license) => {
    if (!license) {
        return ""
    }
    return `
## License

    ${renderLicenseBadge(license)}
    ${renderLicenseLink(license)}
    `
}

const renderCollaborators = templateData => {
    if (!templateData.license) {
        return ""
    }
    return `
## Collaborators 

    ${templateData.collaborators}
    `
}

const renderCredits = templateData => {
    if (!templateData.credits) {
        return "";
    }
    return `
## Credits

    ${templateData.credits}
    `
}

const renderIssues = templateData => {
    if (!templateData.issues) {
        return ""; 
    }
    return `
## Issues

    ${templateData.issues}
    `
}


module.exports = templateData => {
    console.log(templateData);
    return `
# ${templateData.projectname}

Hello and thank you for taking the time to check out this README! Please read the below for an in
depth look at this project. 

Table of Contents: 

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Features](#features)
* [Issues](#issues)
* [Collaborators](#collaborators)
* [Credits](#credits)
* [Questions](#questions)
* [License](#license)

## Description: 

Motivation: 

    ${templateData.motivation}

Languages used: 

    ${templateData.languages.join(', ')}

Link to deployed application:

[${templateData.link}](${templateData.link})
  
## Installation: 

Needed for installation: 

    ${templateData.installation}

Steps to install this project: 

    ${templateData.steps}
  
## Usage:

    ${templateData.usage}
  
## Features: 

    ${templateData.features}

## Issues: 
  
    ${templateData.issues}

## Collaborators: 

    ${templateData.collaborators}

## Credits:

    ${templateData.credits}
  
## Questions:

[${templateData.github}](www.github.com/${templateData.github})

[${templateData.email}](mailto:${templateData.email})

## License: 

![license image](https://img.shields.io/static/v1?label=license&message=${templateData.license}&color=lightgrey)

[${templateData.license}](opensource.org/license/${templateData.license})

${new Date().getFullYear()} by ${templateData.github}
`;
};
