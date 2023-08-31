let words = [
"огірок",
"автомобіль",
"озеро",
"стіл",
"лекція",
"телефон",
"футбол"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}

let remainingLetters = word.length;
while (remainingLetters > 0){
    alert(answerArray.join(" "));
    let guess = prompt("Вгадайте цифру, або натисніть 'Скасувати' для виходу з гри.");
    if (guess === null){
        break
    } else if (guess.length !== 1){
        alert("Будь ласка, введіть цифру від 0 до 9");
    } else{
        for (let j = 0; j < word.length; j++){
            if (word[j] === guess){
                answerArray[j] = guess;
                remainingLetters--;
            }
        }
    }
    
}

alert(answerArray.join(" "));
alert("Супер! Було загадано слово " + word);
