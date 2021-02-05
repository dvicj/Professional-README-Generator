// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generatePage = require("./src/page-template.js"); 
const writeFile = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
    .prompt([
        { 
            type: "input",
            name: "projectname",
            message: "What is the name of your project?(Required)",
            validate: projectNameInput => {
                if (projectNameInput) {
                    return true; 
                    
                } else {
                    console.log("Please enter a project name!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "motivation",
            message: "What was your motivation to create this project?(Required)",
            validate: motivationInput => {
                if (motivationInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        }, 
        {
            type: "checkbox", 
            name: "languages",
            message: "How did you build this projects? Please select all that apply!(Required)",
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node', 'Other'],
            validate: languagesInput => {
                if (languagesInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        },
        { 
            type: "input", 
            name: "link",
            message: "Please enter a link to your finished project.(Required)",
            validate: linkInput => {
                if (linkInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer.");
                    return false; 
                }
            }
        },
        { 
            type: "input",
            name: "installation",
            message: "What does the user need to install your project?(Required)",
            validate: installationInput => {
                if (installationInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }, 
        {
            type: "input", 
            name: "steps",
            message: "What are the steps required to install your project?(Required)",
            validate: stepsInput => {
                if (stepsInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }

        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage for this project?(Required)",
            validate: usageInput => {
                if (usageInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "features",
            message: "What are the features of your project?(Required)",
            validate: featuresInput => {
                if (featuresInput) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "collaborators",
            message: "Please enter the username of your collaborators, if any.",
        },
        {
            type: "input",
            name: "credits",
            message: "Please enter your sources here, if any.",
        }, 
        {
            type: "input",
            name: "issues",
            message: "Please enter your issues here, if any",
        },
        {
            type: "checkbox",
            name: "license",
            message: "Please choose a license.(Required)",
            choices: ['Apache-2.0', 'MIT', 'MPL-2.0', 'CDDL-1.0', 'EPL-2.0'],
            validate: license => {
                if (license) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "What is your GitHub username?(Required)",
            validate: github => {
                if (github) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?(Required)",
            validate: email => {
                if (email) {
                    return true; 
                    
                } else {
                    console.log("Please give an answer!");
                    return false; 
                }
            }
        }
    ])
}; 

promptUser() 
    .then(portfolioData => {
        return generatePage(portfolioData);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err)
    }); 


