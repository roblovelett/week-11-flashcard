# Unit 11 Assignment: Cloze Constructors!

### Overview

In this week's assignment, you will create the backend for a basic flashcard application.

The backend will essentially constitute an API that allows users to create two types of flashcards.

1. **Basic** flashcards, which have a front (*"Who was the first president of the United States?"*), and a back (*"George Washington"*).

2. **Cloze-Deleted** flashcards, which present *partial* text (*"... was the first president of the United States."*), and the full text when the user requests it (*"George Washington was the first president of the United States."*)

As your application will not have a front end, your only need to determine an efficient way to store cloze-deleted cards&mdash;you don't have to solve the problem of displaying them. You are free to decide how you'd like to implement this. One might represent the above flashcard thus:

```
{
  cloze : "{{c1::George Washington}} was the first president of the United States."
}
```

...And expect the front-end to simply hide any part of the string wrapped in `{{c1::...}}`. This works, but there are better ways to do it&mdash;try to think of one.

The bulk of this assignment is implementing `ClozeCard`. If you build a robust `ClozeCard` implementation, feel free to try your hand at implementing a front-end, as well.

### Remember

You will be fully capable of doing this homework by the end of Saturday's class.

## Instructions

* Create a new GitHub repository, named `Flashcard-Generator` or something similar. Clone this to your local drive.

* Create a `BasicCard` constructor. It should accept `front` and `back` arguments.

* Create a `ClozeCard` constructor. It should accept `text` and `cloze` arguments.

    * `ClozeCard` should have a property or method that contains or returns *only* the cloze-deleted portion of the text.

    * `ClozeCard` should have a property or method that contains or returns *only* the partial text.

    * `ClozeCard` should have a property or method that contains or returns *only* the full text.

    * `ClozeCard` should throw or log an error when the cloze deletion does *not* appear in the input text.

    * Try to use Prototypes to equip all `ClozeCard`s with a method that displays the full text.


### Bonuses

* Write your constructors such that users can call them with or without the `new` keyword. 

  * Look up scope-safe constructors, and try to implement them. It takes only two additional lines of code.

* Create a frontend that uses your flashcard data. This front-end can be either a command-line prompt or a browser-based application.

    * When passed a basic flashcard, this program should present the front text; wait for user input; and then display the back text.

    * When passed a cloze-deleted flashcard, this program should present the partial text; wait for user input; and then display the full text.

* Write functionality to load flashcards from a JSON file.

    * You'll need to figure out how to parse and read JSON for this.

-------
### One More Thing
If you have any questions about this project or about the material we covered, the instructor and your TAs are only a Slack message away.

**Good Luck!**

---

## Copyright

Coding Boot Camp &copy; 2016. All Rights Reserved.