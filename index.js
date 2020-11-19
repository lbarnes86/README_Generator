const inquirer = require('inquirer');

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
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What is the project title?',
      name: 'title',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
