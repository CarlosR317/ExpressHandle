function generateMarkdown(answers) {

    // this part adds the user inputs onto the actual readMe file and will put it in the different sections
    return `# Title 
     ${answers.title}
    # License
    [![License: ${answers.license}](https://img.shields.io/badge/License-${answers.license}-yellow.svg)](https://opensource.org/licenses/${answers.license})
    # Description
    ${answers.description}
    ## Table of content 
    1. [Title](#title)
    2. [Description](#description) 
    3. [Installation](#installation)
    4. [Usage](#usage)
    5. [License](#license)
    6. [Contributing](#contributing)
    7. [Tests](#tests)
    8. [Questions](#questions)
    # Installation
    ${answers.installation}
    
    # Usage
    ${answers.usage}
    
    # Contributing
    ${answers.contributing}
    
    # Tests
    ${answers.tests}
    
    # Questions
    ${answers.github}
    
    # Questions
    ${answers.email}
  `;
  }
  
  module.exports = generateMarkdown;