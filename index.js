const fs = require("fs");
const inquirer = require("inquirer");
const util = require("util");
const axios = require("axios");
const generate = require('.utils/generateMarkdown');

const questions = [
    {
        type: "input",
        name: "title" , 
        message: "What is your project title?"
    }, 
    {
        type: "input", 
        name: "description", 
        message: "Pleas provide a description of the project"
    },
    {
        type: "input",
        name: "installationInstructions" , 
        message: "Please provide the installatin instructions"
    }, 
    {
        type: "input",
        name: "license" , 
        message: "Please provide the project license"
    }, 
    {
        type: "input",
        name: "badges" , 
        message: "Please provide badge links"
    }, 
    {
        type: "input",
        name: "collaborators" , 
        message: "Please name any collaborators"
    }, 
    {
        type: "input",
        name: "usage" , 
        message: "Please provide the project usage"
    }, 
    {
        type: "input",
        name: "tests" , 
        message: "Please provide project tests"
    }, 
    {
        type: "input",
        name: "username" , 
        message: "Please provide your GitHub username"
    }, 
    {
        type: "input",
        name: "email" , 
        message: "Please provide your email"
    }, 
    {
        type: "input",
        name: "repo" , 
        message: "Please provide your repo link"
    }, 
];

inquirer
    .prompt(questions)
    .then(function(data) {
        
    })
    fs.writeFile("README.md", generate(data),function(err){
        if (err) {
            throw err;
        }
    })
    console.log("README file created");

    async function init(){

    }

    init();