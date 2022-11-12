import { prompt } from 'inquirer';
import Manager from './lib/Manager';
import Engineer from './lib/Engineer';
import Intern from './lib/Intern';
import generateSite from './generateSite';
import { existsSync, mkdirSync, writeFileSync } from "fs";
import { resolve, join } from "path";
const OUTPUT_DIR = resolve(__dirname, "output")
const outputPath = join(OUTPUT_DIR, "team.html");
const teamMembers = [];

const promptManager = () => {
  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter name!")
          return false;
        }

      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter Employee ID.',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter ID!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email.',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter email adress!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Enter your office number.',
      validate: officeNumber => {
        if (officeNumber) {
          return true;
        } else {
          console.log("Please enter your office number !")
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
    teamMembers.push(manager);
    promptMenu();
  })
};

const promptMenu = () => {
  return prompt([
    {
      type: 'list',
      name: 'menu',
      message: 'Please select which option you would like to continue with;',
      choices: ['add an engineer', 'add an intern', 'finish buidling team']
    }])
    .then(userChoice => {
      switch (userChoice.menu) {
        case " add an engineer":
          promptEngineer();
          break;
        case "add an intern":
          promptIntern();
          break;
        default:
          buildTeam();
      };
    });
};

const promptEngineer = () => {
  console.log(`
  ++++++++++++++++++
  Add a New Engineer
  ++++++++++++++++++
  `);

  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Engineer?',
      validate: engineerName => {
        if (engineerName) {
          return true;
        } else {
          console.log("Please enter name of Engineer!")
          return false;
        }

      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter Employee ID.',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter ID!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Engineer email.',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter email adress!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'githubUsername',
      message: 'Enter your github.',
      validate: githubUsername => {
        if (githubUsername) {
          return true;
        } else {
          console.log("Please enter github!")
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
    teamMembers.push(engineer);
    promptMenu();
  })
};

const promptIntern = () => {
  console.log(`
  ++++++++++++++++++
  Add a New Intern
  ++++++++++++++++++
  `);

  return prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the Intern?',
      validate: internName => {
        if (internName) {
          return true;
        } else {
          console.log("Please enter name of Intern!")
          return false;
        }

      }
    },
    {
      type: 'input',
      name: 'employeeId',
      message: 'Enter Employee ID.',
      validate: employeeId => {
        if (employeeId) {
          return true;
        } else {
          console.log("Please enter ID!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter Intern email.',
      validate: email => {
        if (email) {
          return true;
        } else {
          console.log("Please enter email adress!")
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'school',
      message: 'Enter your school.',
      validate: school => {
        if (school) {
          return true;
        } else {
          console.log("Please enter school!")
          return false;
        }
      }
    },
  ]).then(answers => {
    console.log(answers);
    const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
    teamMembers.push(intern);
    promptMenu();
  })
};

const buildTeam = () => {
  console.log(`
+++++++++++++++++++++++++++++++++++++++++++++
Congratulations! You have built your team :)!
+++++++++++++++++++++++++++++++++++++++++++++
`);

  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR)
  }
  writeFileSync(outputPath,generateSite(teamMembers),"utf-8");
}

promptManager();