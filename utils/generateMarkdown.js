function generateMarkdown (data) {
    return `
    # ${data.title} 
    
    ## Table of Contents
  
 - [Description](#description)
 - [Installation](#installation)
 - [Usage](#usage)
 - [License](#license)
 - [Contributing](#contributing)
 - [Test](#test)
 - [Questions](#questions)

 ## Description

 ![License](https://img.shields.io/badge/license-${data.license}-blue.svg "License Badge")
  
   * ${data.description}

 ## Installation

   * ${data.installation}

## Usage

   * ${data.usage}

## License

   * For more information about the license click the link below.

 *[License](https://opensource.org/licenses/${data.license})   

## Contributing

   * ${data.contributing}

## Tests

   * ${data.test}

## Questions

    For more questions about this app you can 

    visit my GitHub page at the following link:

- [GitHub Profile](https://github.com/${data.username})

For more information please contact by email at: ${data.email}.
 
 ` ;
}


module.exports = generateMarkdown;
  