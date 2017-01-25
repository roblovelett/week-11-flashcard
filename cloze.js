var fs = require('fs');
var inquirer = require('inquirer');
var cloze = require('./cloze.json');

clozeCard();

function clozeCard() {
    var prompt = inquirer.createPromptModule();
    var questions = cloze;
    console.log(questions);


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