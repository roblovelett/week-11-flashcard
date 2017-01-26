var fs = require('fs');
var inquirer = require('inquirer');
var cloze = require('./cloze.json');

function BasicCard(front, back) {
    this.front = front;
    this.back = back;
};

var basiccard = new BasicCard("... was the first president of the United States.", "George Washington");
console.log(basiccard.front + basiccard.back + "\n");


function ClozeCard(text, cloze) {
    this.cloze = cloze;
    console.log("cloze: " + cloze);
    if(!cloze || text.indexOf(cloze) == -1) {
        
        this.error = "Undefined";
    } else {
        this.full_text = text;
        this.answer_text = cloze;
        this.partial_text = text.replace(cloze, "...");
    }; 
};

ClozeCard.prototype.full_text = "";
ClozeCard.prototype.answer_text = "";
ClozeCard.prototype.partial_text = "";

var clozecard01 = new ClozeCard("John Adams was the second president of the United States.", "John Adams");
var clozecard02 = new ClozeCard("George Washington was the first president of the United States.", "Ge0rge W4shington");
var clozecard03 = new ClozeCard("Foo foo");

console.log("card 1: " + " full: " + clozecard01.full_text + " partial: " + clozecard01.partial_text + clozecard01.error + "\n");
console.log("card 2: " + clozecard02.error + "\n");
console.log("card 3: " + clozecard03.error + "\n");

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