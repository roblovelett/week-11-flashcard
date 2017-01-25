/*

Instructions

Over the course of this activity you are going to be using constructors to create simplistic characters 
for use within a very basic Roleplaying Game (RPG)

Each character created using your constructor should have the following properties...

Name: The character's name --> String

Profession: What the character does for a living --> String

Gender: The character's gender --> String

Age: The character's age --> Integer

Strength: Abstraction for how strong the character is --> Integer

HitPoints (HP): Abstraction for how much health the character has --> Integer

PrintStats: Function which prints all of a character's properties to the screen
*/

function Character(name, profession, gender, age, strength, hp) { //Constructor for character
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.stats = function printStats() {
        console.log(
            "Name: " + this.name + "\n" + 
            "Profession: " + this.profession + "\n" +
            "Gender: " + this.gender + "\n" +
            "Age: " + this.age + "\n" +
            "Strength: " + this.strength + "\n" +
            "HP: " + this.hp + "\n"
        );
    };
    this.lvUp = function levelUp() {
        //LevelUp: Function which increases this character's Age by 1, their Strength by 5, and their HitPoints by 25.
        this.age ++;
        this.strength = strength + 5;
        this.hp = hp + 25;
        console.log(
            this.name + " Leveled up! \n" +
            "Age + 1, " + this.name + " is " + this.age + " years old. \n" + 
            "Strength + 5, " + this.name + " is " this.strength + " strong. \n" + 
            "HP + 25, " + this.name + " has " + this.hp + " HP \n"
        );
    };
};

var leopold = new Character("Leopold", "Blacksmith", "Male", 40, 8, 80);
var darla = new Character("Darla", "Warrior", "Female", 32, 7, 70);

leopold.stats();
darla.stats();

leopold.attack(darla.hp, this.strength);
darla.lvUp();

function isAlive() {};
function attack(enemyHp, playerStrength) {};
function levelUp() {};

/*
IsAlive: Function which prints whether or not this character is alive by looking into their hitpoints and 
determining whether they are above or below zero.
*/

/*
BONUS: After completing the previous sections and making sure they work, you now have everything you need to 
create a very basic RPG where two characters fight one another. Don't worry if you cannot finish this part of 
the activity as, by completing the above sections you are well on your way to mastering constructors!

*/