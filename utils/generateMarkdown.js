// Object of licenses
let licenses = [
  {
    name: 'MIT License',
    badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
    link: 'https://opensource.org/licenses/MIT'
  },
  {
    name: 'GNU GPL v2',
    badge: 'https://img.shields.io/badge/License-GPL_v2-blue.svg',
    link: 'https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html'
  },
  {
    name: 'GNU GPL v3',
    badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
    link: 'https://www.gnu.org/licenses/gpl-3.0'
  },
  {
    name: 'Apache License 2.0',
    badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
    link: 'https://opensource.org/licenses/Apache-2.0'
  },
  {
    name: 'BSD 3-Clause',
    badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
    link: 'https://opensource.org/licenses/BSD-3-Clause'
  },
]


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return licenses.filter(l => l.name == license)[0].badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return licenses.filter(l => l.name == license)[0].link;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);

  let licenseStr = `[![License](${badge})](${link})`;
  return licenseStr;
}

// Function to generate a table of contents
function generateToC(data) {
  // Usage, License, Contributing, Tests, and Questions
  let descLink, installLink, usageLink, constributeLink, testLink, questionsLink;

  if (data.description) {
    descLink = '[Description](#description) <br />';
  }
  if (data.install) {
    installLink = '[Installation](#installation) <br />';
  }
  if (data.usage) {
    usageLink = '[Usage](#usage)';
  }
  if (data.contribute) {
    constributeLink = '[Contribute](#contribute) <br />';
  }
  if (data.test) {
    testLink = '[Test](#test) <br />';
  }
  if (data.githubUserName && data.email) {
    questionsLink = '[Questions](#questions) <br />';
  }
  toc = `
  ## Table of Contents
  ${descLink}
  ${installLink}
  ${constributeLink}
  ${testLink}
  ${questionsLink}
  <br />
  `;

  return toc;
}

// Function to generate a Description
function generateDescription(data) {
  if (!data.description) {
    return;
  }

  let descText = `
  ## Description
  ${data.description} <br />
  `

  return descText;
}

// Function to generate Installation instructions
function generateInstructions(data) {
  if (!data.install) {
    return;
  }

  let installText = `
  ## Installation
  ${data.install} <br/>
  `

  return installText;
}

// Function to generate the usage section
function generateUsage(data) {
  if (!data.usage) {
    return;
  }

  let usageText = `
  ## Usage
  ${data.usage} <br/>
  `

  return usageText;
}

// Function to generate constributions
function generateContribute(data) {
  if (!data.contribute) {
    return;
  }

  let contText = `
  ## Constribute
  ${data.contribute} <br/>
  `

  return contText;
}
// Function to test constributions
function generateTestSection(data) {
  if (!data.test) {
    return;
  }

  let testText = `
  ## Test
  ${data.test} <br/>
  `

  return testText;
}
// Function to generate constributions
function generateQuestions(data) {
  if (!data.githubUserName && !data.email) {
    return;
  }

  let questionText = `
  ## Questions? 
  Reach me at the following with your questions: <br/>
  Github Username: ${data.githubUserName} <br/>
  Email:  ${data.email} <br/>
  <br/>
  `

  return questionText;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let readMeText = ``;

  // Create the title
  if (data.title) {
    let title = `# ${data.title}\n`;
    readMeText += title;
  }

  // Create the Table of Contents
  let toc = generateToC(data);

  // add the table of contents to the README file
  readMeText += toc;

  // create the description section
  let descSection = generateDescription(data);

  // add the description section to the readMe file
  readMeText += descSection;

  // create the installation section
  let installSection = generateInstructions(data);

  // add the installation instructions to the readMe text
  readMeText += installSection;

  // create the usage section
  let usageSection = generateUsage(data);
  readMeText += usageSection;

  // create the constribution section
  let constributionSection = generateContribute(data);
  readMeText += constributionSection;

  // create test section
  let testSection = generateTestSection(data);
  readMeText += testSection;

  // create question section
  let questionSection = generateQuestions(data);
  readMeText += questionSection;

  // create license section
  let licenseUsed = renderLicenseSection(data.license);
  readMeText += licenseUsed;

  return readMeText;
}

module.exports = generateMarkdown;
