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

  if (data.desc) {
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
  \n
  `;

  return toc;
}

// Function to generate a Description

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

  return readMeText;
}

module.exports = generateMarkdown;
