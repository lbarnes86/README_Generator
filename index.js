const inquirer = require('inquirer');
const fs = require('fs');
const utils = require('utils');

const writeFileAsync = utils.promisify(fs.writeFile);

// creates question 
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'Enter a description of your project',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions for your project?',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'How can your app be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who are the contributors on this project?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',
    },
    {
      type: 'checkbox',
      message: 'Please choose a license',
      choices: ["MIT", "ISC", "Apache"],
      name: "license",
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
  ])
  
   function generateMarkdown(response) {
       return `

# ${response.title}
    
# Table of Contents
  
 - [Description](#description)
 - [Instructions](#instructions)
 - [Usage](#usage)
 - [Contribution](#contribution)
 - [Test](#test)
 - [License](#license)
 - []()
 - []()

 ## Description:
 ![License](https://img.shileds.io/badge/license-${response.license}-blue.svg "License Badge")
  
  
  
  # ${response.title}
  # ${response.description}
  # ${response.instructions}
  # ${response.usage}
  # ${response.contribution}
  # ${response.license}
  # ${response.username}
  # ${response.email}
  `
    return fs.writeFile("README.md", template); 

  }).then({error} => {
      console.log(error)});