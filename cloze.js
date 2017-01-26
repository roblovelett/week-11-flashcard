var fs = require('fs');
var inquirer = require('inquirer');
var cloze = require('./cloze.json');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

var basiccard = new basicCard();

function ClozeCard(text, cloze) {
    this.text = text;
    this.cloze = cloze;
};

ClozeCard.prototype.
/*
Create a `ClozeCard` constructor. It should accept `text` and `cloze` arguments.

    * `ClozeCard` should have a property or method that contains or returns *only* the cloze-deleted portion of the text.

    * `ClozeCard` should have a property or method that contains or returns *only* the partial text.

    * `ClozeCard` should have a property or method that contains or returns *only* the full text.

    * `ClozeCard` should throw or log an error when the cloze deletion does *not* appear in the input text.

    * Try to use Prototypes to equip all `ClozeCard`s with a method that displays the full text.
*/
/*
clozeCard();

function clozeCard() {
    var prompt = inquirer.createPromptModule();
    var questions = []; //init
    var keys = Object.keys(cloze);
    for (i=0; i < keys.length; i++) {
        var question_json = cloze[keys[i]];
        var question = {}; //init
        console.log(question_json.text);
        console.log(question_json.answer);
    };
*/
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