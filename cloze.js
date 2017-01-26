var fs = require('fs');
var inquirer = require('inquirer');
var cloze = require('./cloze.json');

clozeCard();

function clozeCard() {
    var prompt = inquirer.createPromptModule();
    var questions = []; //init
    var keys = Object.keys(cloze);
    for (i=0; i < keys.length; i++) {
        var question = cloze[keys[i]];
        console.log(/*JSON.stringify(*/question.answer/*)*/);
    };

/*
    for (i=0; i < keys.length; i++) {
        var question = cloze[keys[i]];
        prompt([
            {
                name: JSON.stringify(question.answer),
                message: "..." + JSON.stringify(question.text)
            }
        ])
    };
    console.log(keys.length);
    console.log(cloze[keys[0]]);
    console.log(cloze[keys[1]]);
    console.log(cloze[keys[2]]);
*/

    //console.log(keys);
    
    /*
    .push
    {
        type: 'input',
        name: 'firstName',
        message: 'What is your first name?'
    }, {
        name: 'operatingSystem',
        message: 'What is your operating System?',
        default: 'Windows'
}, {
  name: 'favoriteColor',
  message: 'What is your favorite rainbow Color?',
  type: 'list'
  choices: ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Indigo', 'Violet']
}];
    prompt(questions).then();
*/

/*
    var keys = Object.keys(cloze);

    for (i=0; i < keys.length; i++) {
        var question = cloze[keys[i]];
        prompt([
            {
                name: JSON.stringify(question.answer),
                message: "..." + JSON.stringify(question.text)
            }
        ])
    };

    console.log(keys.length);
    console.log(cloze[keys[0]]);
    console.log(cloze[keys[1]]);
    console.log(cloze[keys[2]]);


    for (var i = 0; i < keys.length; i++) {
        var question = cloze[keys[i]];        
        prompt([
            {
                name: JSON.stringify(question.answer),
                message: "..." + JSON.stringify(question.text)
            }
        ]).then(function(answers) {
            console.log(answers);
        });
    };
    */
};