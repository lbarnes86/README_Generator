const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instructions?',
      name: 'instructions',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contribution',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'test',
    },
    {
      type: 'list',
      message: 'Please choose a license',
      choices: ['Please choose a license'],
      name: 'license',
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
      
  console.log(response.username) 

    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  }
 );
