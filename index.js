const inquirer = require('inquirer');
const fs = require('fs');

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
  .then((response) => {
      
  console.log(response) 

  let template = `## Documentation`

  fs.writeFile("README.md", template, (error) => {

    console.log(error);

  })

  });