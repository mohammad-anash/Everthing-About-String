const message = document.getElementById("text");
const CountWords = document.querySelector(".Words");
const CountLetter = document.querySelector(".Letter");
const CountVowel = document.querySelector(".Vowel");
const CountConsonant = document.querySelector(".Consnant");
const FirstWord = document.querySelector(".FirstWord");
const MiddleWord = document.querySelector(".MiddleWord");
const LastWord = document.querySelector(".LastWord");

function messagelength() {
  const Stringlength = message.value.replaceAll(" ", "");
  CountLetter.innerHTML = Stringlength.length;
}

function countWordsFronString() {
  const removeSpace = message.value.split(" ").filter((element) => {
    return element.length > 0;
  });
  CountWords.innerHTML = removeSpace.length;
}

function findVowelFromString() {
  const vowel = "aeiou";
  let VowelStore = "";
  let ConsonantStore = "";
  const string = message.value.replaceAll(" ", "");

  for (let i = 0; i < string.length; i++) {
    if (vowel.includes(string[i])) {
      VowelStore += string[i];
    } else  {
      ConsonantStore += string[i];
    }
  }
  CountVowel.innerHTML = VowelStore.length;
  CountConsonant.innerHTML = ConsonantStore.length;
}

function FirstLastWordOfString() {
  const first = message.value.split(" ");
  FirstWord.innerHTML = first[0];

  const last = message.value.split(" ").pop();
  LastWord.innerHTML = last;
}

function MiddleWordOfString() {
  const breakStr = message.value.split(" ")
  const WordsLength = Math.floor(breakStr.length / 2);
  MiddleWord.innerHTML = breakStr[WordsLength];
}

message.addEventListener("keyup", () => {
  MiddleWordOfString();
  FirstLastWordOfString();
  findVowelFromString();
  countWordsFronString();
  messagelength();
});
