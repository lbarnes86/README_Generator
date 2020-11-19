const inquirer = require('../Develop/node_modules/inquirer/lib/inquirer');
//const generatorMarkdown = require('./Develop/utils/generateMarkdown');
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
  ])
  
   .then((response) =>{
       console.log(response)

    let template = 

   `## ${response.title}
    
## Table of Contents
  
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Test](#test)
 - [Questions](#questions)

 ## Description
 ![License](https://img.shields.io/badge/license-${response.license}-blue.svg "License Badge")
  
   * ${response.description}
 ## Installation
   * ${response.installation}
## Usage
   * ${response.usage}
## License
   * For more information about the license click the link below.

 *[License](https://opensource.org/licenses/${response.license})   

## Contributing
   * ${response.contributing}
## Tests
   * ${response.test}
## Questions
    For more questions about this app you can 
    visit my GitHub page at the following link:

- [GitHub Profile](https://github.com/${response.username})

For more information please contact by email at: ${response.email}.
`
   fs.writeFile("README.md", template, (error) =>{
       console.log(error);
   })

}
   );