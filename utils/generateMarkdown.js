// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installaion](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributing}

  ## Tests
  ${data.tests}

  ## Questions
  My Github Page:
  https://github.com/${data.github}

  Get in touch! Email me at <a href='mailto:${data.email}'> ${data.email} </a>


  ${renderLicenseSection(data.license)}
`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "The Unlicense"){
    return `![badge](https://img.shields.io/badge/license-${license}-important)`
  } else return '' //empty string
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "The Unlicense") {
    return(
      `- [License](#license)`
    )
  } else return '' //empty string
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license !== 'The Unlicense') {
    return(
      `## License
      This software is available under the ${license} license.`
    )
  } else return '' //empty string
}

module.exports = generateMarkdown;
