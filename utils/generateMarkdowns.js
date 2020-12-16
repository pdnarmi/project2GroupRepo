
function generateMarkdowns(data) {
    return `# ${data.projectName}
    License covered under
    ![license](https://img.shields.io/badge/license-${data.license}-blue)
    * [Description](#Descripton)
    * [Installation](#Installation)
    * [License](#License)
    * [Contribution](#Contributing)
    * [Questions](#Questions)
    * [Tests] (#Tests)
    
  
  
    # Description
    > ${data.description}
  
    # Installation
    > ${data.installation}
  
    # License
    > ${data.license}
  
    # Contribution
    > ${data.contributing}
  
    # Questions
    > Contact, ${data.username} at gitHub or by email ${data.email}
    
    `
    
  }
  
  module.exports = generateMarkdowns;