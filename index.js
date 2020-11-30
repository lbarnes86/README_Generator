const inquirer = require('inquirer');
const generatorMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// creates question 

  const questions = [
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
      name: 'installation',
    },
    {
      type: 'input',
      message: 'How can your app be used?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'Who are the contributors on this project?',
      name: 'contributing',
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
  ];
  //
   function writeToFile(fileName, data){
     return fs.writeFileSync((process.cwd(), fileName), data);
   }
//
   function start(){
     inquirer.prompt (questions)
     .then((res) => {
       console.log("Constructing README.md");
       fs.writeFileSync("README.md", generatorMarkdown(res))
     })
     
   } 
   start();