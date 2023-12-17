class Flat {
  constructor({ name, description, character, permission, guidance, cat }) {
    this._name = name;
    this._description = description;
    this._linkedFlats = {};
    this._character = character;
    this._permission = permission;
    this._guidance = guidance;
    this._cat = cat;
  }
  get guidance() {
    return this._guidance;
  }

  get cat() {
    return this._cat;
  }

  get permission() {
    return this._permission;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      alert("Name is too short.");
      return;
    }
    this._name = value;
  }

  get description() {
    return this._description;
  }

  set description(value) {
    if (value.length < 4) {
      alert("Description is too short.");
      return;
    }
    this._description = value;
  }

  get character() {
    return this._character;
  }

  linkFlat(direction, flatToLink) {
    this._linkedFlats[direction] = flatToLink;
  }

  describe(name) {
    if (name === Hall) {
      return `You are in the ${this.name}. You can see ${this.description}`;
    } else {
      return `You knoked into the ${this.name}, the owner let you in. You can see ${this.description}`;
    }
  }

  move(direction) {
    if (direction in this._linkedFlats) {
      return this._linkedFlats[direction];
    } else {
      alert("You can't go that way");
      alert(this._name);
      return this;
    }
  }
}

class Character {
  constructor(name, task, answer) {
    this._name = name;
    this._task = task;
    this._answer = answer;
  }

  get name() {
    return this._name;
  }

  interact(onSuccess, onFail) {
    let question = `<p>The question is: ${this._task}</p>`;
    let input =
      '<input type="text" id="useranswer" class="block w-full md:w-1/2 rounded-md border border-black py-1.5 px-10 outline-none"/>';
    let content = question + input;
    const interaction = document.getElementById("interaction");
    interaction.innerHTML = content;

    const useranswer = document.getElementById("useranswer");
    interaction.style.display = "flex";
    document.getElementById("useranswer").focus();

    useranswer.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        let useranswerValue = useranswer.value;

        if (useranswerValue === this._answer) {
          interaction.style.display = "none";
          onSuccess();
        } else {
          interaction.style.display = "none";
          onFail();
        }
      }
    });
  }
}

const Character1 = new Character("Tim", "1+1", "2");
const Character2 = new Character("Kids", "2+2", "4");
const Character3 = new Character("Tonny", "3+3", "6");
const Character4 = new Character("Old lady", "4+4", "8");
const Character5 = new Character("Angry man", "5+5", "10");
const Character6 = new Character("David Dawson", "6+6", "12");
const Character7 = new Character("Crazy cat lady", "7+7", "14");

const Hall = new Flat({
  name: "Hall",
  description:
    "a long, narrow room with two entrance doors to Flats 1 and 2. Where should you go? Think like a cat. There is a backyard in Flat 1 with lots of squirrels; cats love squirrels! However, there is also a very delicious smell of food coming from Flat 2, but there are also lots of children screaming. Flat 1 - south, Flat 2 - east.",
});

const Flat1 = new Flat({
  name: "Flat 1",
  description: `a 2-bedroom flat with a backyard and a door to Flats 3 and 4. After checking the flat, you find no sign of missing squirrels, indicating the absence of a cat. To change flats, you'll need ${Character1.name}'s permission, which you can obtain by answering a question.`,
  character: Character1,
  permission:
    "Well done! <br>You can come back to the Hall, or you can go to Flat 3 or Flat 4. What are you going to choose? You know that in Flat 3, there is a dog living, but the owner really likes cats and always gives Barney some treats. You also know that in Flat 4, a lovely woman once petted Barney when he was chilling on the bin.",
  guidance: "Hall - north, Flat 3 - south, Flat 4 - east",
});

const Flat2 = new Flat({
  name: "Flat 2",
  description: `a 3-bedroom flat with a backyard and no access to other flats. You looked around and didn't find a cat, but ${Character2.name} told you that if you solve the riddle, they will reveal where they saw him this morning.`,
  character: Character2,
  permission:
    "Well done! <br>They saw Barney lying next to Flat 4 this morning.",
  guidance: "To return to the hall, enter - west.",
});

const Flat3 = new Flat({
  name: "Flat 3",
  description: `a 1-bedroom flat. There is no cat or access to other flats. ${Character3.name} wasn't happy that you asked a question about a cat in front of his dog. To come back to Flat 1 and maintain good neighborly relations with ${Character3.name}, you have to solve the riddle.`,
  character: Character3,
  permission: "Well done!",
  guidance: "To return to the Flat 1, enter - north",
});

const Flat4 = new Flat({
  name: "Flat 4",
  description: `a 2-bedroom flat with access to Flat 5 and Flat 6. No cat here. ${Character4.name}, who lives here, is very happy to talk to you. To get access to these flats, you have to answer her question.`,
  character: Character4,
  permission:
    "Well done! <br>Now, you can choose to go to Flat 5 or Flat 6. You are aware that a very angry man resides in Flat 5, while in Flat 6, a famous actor from the 'Last Kingdom' movie lives. Where would you like to go?",
  guidance: "Flat 5 - south, Flat 6 - east",
});
const Flat5 = new Flat({
  name: "Flat 5",
  description: `a 3-bedroom flat with access to Flat 7. ${Character5.name} mentioned that there is no cat here, but he knows its whereabouts. However, you have to solve a challenging task. If you answer correctly, you'll discover where to find the cat.`,
  character: Character5,
  permission: "Well done! <br>The owner told you that the cat is in Flat 7.",
  guidance: "In order to get to the Flat 7 enter - east",
});
const Flat6 = new Flat({
  name: "Flat 6",
  description: `a 1-bedroom flat, with no cat and with access to Flat 7. ${Character6.name} told you that the cat might be in Flat 7, but if you answer his question correctly, he will tell you the solution to the task in Flat 7..`,
  character: Character6,
  permission: "Well done!",
  guidance: "Flat 7 - south",
});
const Flat7 = new Flat({
  name: "Flat 7",
  description: `Finally, you found a cat! Congrats! You have to solve the last task from ${Character7.name}, and then she'll give you the cat back.`,
  character: Character7,
  permission: "YOU WON!!!!",
  cat: true,
});

Hall.linkFlat("south", Flat1);
Hall.linkFlat("east", Flat2);
Flat1.linkFlat("north", Hall);
Flat1.linkFlat("south", Flat3);
Flat1.linkFlat("east", Flat4);
Flat2.linkFlat("west", Hall);
Flat3.linkFlat("north", Flat1);
Flat4.linkFlat("west", Flat1);
Flat4.linkFlat("south", Flat5);
Flat4.linkFlat("east", Flat6);
Flat5.linkFlat("north", Flat4);
Flat5.linkFlat("east", Flat7);
Flat6.linkFlat("west", Flat4);
Flat6.linkFlat("south", Flat7);
Flat7.linkFlat("west", Flat5);
Flat7.linkFlat("north", Flat6);

Flat1.character;

function displayFlatInfo(flat) {
  let textContent = `
    <p>${flat.describe(flat)}</p>`;

  document.getElementById("textarea").innerHTML = textContent;

  document.getElementById("usertext").focus();

  if (flat.character) {
    const usertext = document.getElementById("usertext");
    usertext.style.display = "none";
    flat.character.interact(
      () => {
        usertext.style.display = "inline-block";
        document.getElementById("usertext").focus();

        let textPermission = `
      <p>${flat.permission}</p>`;
        let textGuidance = `<p class="font-bold">${flat.guidance}</p>`;
        if (flat.cat) {
          usertext.style.display = "none";
          textGuidance = "";
        }
        let content = textPermission + textGuidance;
        document.getElementById("textarea").innerHTML = content;
      },
      () => {
        alert("The answer is wrong. Now you have to start from the beginning.");
        startGame();
      }
    );
  }
}

function startGame() {
  onStart();
  const btnStart = document.getElementById("btnStart");
  btnStart.addEventListener("click", () => {
    let currentFlat = Hall;
    displayFlatInfo(currentFlat);
    btnStart.style.display = "none";

    let usertext = document.getElementById("usertext");
    usertext.style.display = "block";
    usertext.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        usertextValue = usertext.value;
        const directions = ["north", "south", "east", "west"];
        if (directions.includes(usertextValue.toLowerCase())) {
          currentFlat = currentFlat.move(usertextValue);
          document.getElementById("usertext").value = "";
          displayFlatInfo(currentFlat);
        } else {
          document.getElementById("usertext").value = "";
          alert("that is not a valid command please try again");
        }
      }
    });
  });
}

const onStart = () => {
  let descriprionContent = `
  <p>Welcome to the "Find a Cat" game! Barney, the neighbor's cat, has mysteriously entered your building. The house consists of 7 flats. It's known that Barney used to live here with his family, which is why he keeps coming back. Your mission is to locate the cat. In each flat, you must answer a question to gain access to the next one. Best of luck!</p>`;
  document.getElementById("textarea").innerHTML = descriprionContent;
  const btnStart = document.getElementById("btnStart");
  btnStart.style.display = "block";
  const userText = document.getElementById("usertext");
  userText.style.display = "none";
};

startGame();
