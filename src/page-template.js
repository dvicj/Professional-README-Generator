// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (templateData) => {
  if (!templateData.license) {
    return ""; 
  }
  return `
  //license badge 
  `
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (templateData) => {
  if (!templateData.license) {
    return ""; 
  }
  return `
    //link to license 
  `
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = templateData => {
    if (!templateData.license) {
        return ""
    }
    return `
    license badge and link 
    `
}

const renderCollaborators = templateData => {
    if (!templateData.collaborators) {
        return "";
    }
    return `
    ##Collaborators 
    ${templateData.collaborators}
    `
}

const renderCredits = templateData => {
    if (!templateData.credits) {
        return "";
    }
    return `
    ##Credits
    ${templateData.credits}
    `
}

const renderIssues = templateData => {
    if (!templateData) {
        return ""; 
    }
    return `
    ##Issues
    ${templateData.issues}
    `
}


module.exports = templateData => {
    const { data } = templateData

    console.log(templateData);
    return `
# ${templateData.projectname}
## Description: 
Motivation: 

    ${templateData.motivation}

Languages used: 

    ${templateData.languages.join(', ')}

Link to deployed application:

    ${templateData.link}
  
## Installation: 

    Needed for installation: 

    ${templateData.installation}

    Steps to install this project: 

    ${templateData.steps}
  
## Usage:

    ${templateData.usage}
  
## Features: 

    ${templateData.features}
  
    ${renderIssues(templateData.issues)}

    ${renderCollaborators(templateData.collaborators)}

    ${renderCredits(templateData.credits)}
  
## Questions
    ${templateData.github}
    ${templateData.email}
    

    ${renderLicenseBadge(templateData.license)}
    ${renderLicenseLink(templateData.license)}

${new Date().getFullYear()} by ${templateData.github}
`;
};
