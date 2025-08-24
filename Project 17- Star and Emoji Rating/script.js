/*
Sure! Here's everything in one list:

- 😫 Weary Face --->   &#x1F62B
- 😩 Weary Face --->   &#x1F629
- 😕 Confused Face --->   &#x1F615
- 😐 Neutral Face --->    &#x1F610
- 🤔 Thinking Face --->   &#x1F914
- 🙂 Slightly Smiling Face --->    &#x1F642
- 😊 Smiling Face with Smiling Eyes --->    &#x1F60A
- 😄 Grinning Face with Smiling Eyes --->   &#x1F604
- 😁 Beaming Face with Smiling Eyes --->    &#x1F601
- 😍 Smiling Face with Heart-Eyes --->   &#x1F60D

- ★ Filled star --->  &#9733
- ☆ Empty star --->   &#9734

*/

const emojiArray = [
   {
      hexCode: "&#x1F62B;",
      text: "Feeling utterly exhausted and drained.",
      value: 1,
   },
   {
      hexCode: "&#x1F629;",
      text: "The weariness is real and overwhelming.",
      value: 1,
   },
   {
      hexCode: "&#x1F615;",
      text: "Confused and unsure about what to think.",
      value: 2,
   },
   {
      hexCode: "&#x1F610;",
      text: "Feeling neutral, neither happy nor sad.",
      value: 2,
   },
   {
      hexCode: "&#x1F914;",
      text: "Lost in deep thought, pondering something important.",
      value: 3,
   },
   {
      hexCode: "&#x1F642;",
      text: "A slight smile, feeling somewhat happy and content.",
      value: 3,
   },
   {
      hexCode: "&#x1F60A;",
      text: "A warm smile with smiling eyes, feeling truly happy.",
      value: 4,
   },
   {
      hexCode: "&#x1F604;",
      text: "Grinning widely with smiling eyes, overjoyed.",
      value: 4,
   },
   {
      hexCode: "&#x1F601;",
      text: "Beaming with delight and happiness.",
      value: 5,
   },
   {
      hexCode: "&#x1F60D;",
      text: "Feeling love-struck and adoring with heart eyes.",
      value: 5,
   },
];

const btn = document.getElementById('btn');
const container = document.querySelector('.content');
const star1 = document.getElementById('1');
const star2 = document.getElementById('2');
const star3 = document.getElementById('3');
const star4 = document.getElementById('4');
const star5 = document.getElementById('5');
const result = document.getElementById("ratingResult");

document.body.style.backgroundColor = "lightblue";
container.style.backgroundColor = "white";
container.style.color = "black";
result.textContent = "";

star1.innerHTML = `&#9734;`
star2.innerHTML = `&#9734;`
star3.innerHTML = `&#9734;`
star4.innerHTML = `&#9734;`
star5.innerHTML = `&#9734;`

btn.addEventListener("click", () => {
   if (container.style.backgroundColor === "white") {
      document.body.style.backgroundColor = "darkblue";
      container.style.backgroundColor = "black";
      container.style.color = "white";
   }
   else {
      document.body.style.backgroundColor = "lightblue";
      container.style.backgroundColor = "white";
      container.style.color = "black";
   }
});

star1.addEventListener('click', () => {
   star1.innerHTML = `&#9733;`
   star2.innerHTML = `&#9734;`
   star3.innerHTML = `&#9734;`
   star4.innerHTML = `&#9734;`
   star5.innerHTML = `&#9734;`
   
   if (container.style.backgroundColor === "white") {
      result.innerHTML = `A ${emojiArray[1].value} star rating. ${emojiArray[1].hexCode} ${emojiArray[1].hexCode} ${emojiArray[1].hexCode}   ${emojiArray[1].text}`;
   }
   else {
      result.innerHTML = `A ${emojiArray[0].value} star rating. ${emojiArray[0].hexCode} ${emojiArray[0].hexCode} ${emojiArray[0].hexCode}   ${emojiArray[0].text}`;
   }
});
star2.addEventListener('click', () => {
   star1.innerHTML = `&#9733;`
   star2.innerHTML = `&#9733;`
   star3.innerHTML = `&#9734;`
   star4.innerHTML = `&#9734;`
   star5.innerHTML = `&#9734;`
   
   if (container.style.backgroundColor === "white") {
      result.innerHTML = `A ${emojiArray[3].value} star rating. ${emojiArray[3].hexCode} ${emojiArray[3].hexCode} ${emojiArray[3].hexCode}   ${emojiArray[3].text}`;
   }
   else {
      result.innerHTML = `A ${emojiArray[2].value} star rating. ${emojiArray[2].hexCode} ${emojiArray[2].hexCode} ${emojiArray[2].hexCode}   ${emojiArray[2].text}`;
   }
});
star3.addEventListener('click', () => {
   star1.innerHTML = `&#9733;`
   star2.innerHTML = `&#9733;`
   star3.innerHTML = `&#9733;`
   star4.innerHTML = `&#9734;`
   star5.innerHTML = `&#9734;`
   
   if (container.style.backgroundColor === "white") {
      result.innerHTML = `A ${emojiArray[5].value} star rating. ${emojiArray[5].hexCode} ${emojiArray[5].hexCode} ${emojiArray[5].hexCode}   ${emojiArray[5].text}`;
   }
   else {
      result.innerHTML = `A ${emojiArray[4].value} star rating. ${emojiArray[4].hexCode} ${emojiArray[4].hexCode} ${emojiArray[4].hexCode}   ${emojiArray[4].text}`;
   }
});
star4.addEventListener('click', () => {
   star1.innerHTML = `&#9733;`
   star2.innerHTML = `&#9733;`
   star3.innerHTML = `&#9733;`
   star4.innerHTML = `&#9733;`
   star5.innerHTML = `&#9734;`
   
   if (container.style.backgroundColor === "white") {
      result.innerHTML = `A ${emojiArray[7].value} star rating. ${emojiArray[7].hexCode} ${emojiArray[7].hexCode} ${emojiArray[7].hexCode}   ${emojiArray[7].text}`;
   }
   else {
      result.innerHTML = `A ${emojiArray[6].value} star rating. ${emojiArray[6].hexCode} ${emojiArray[6].hexCode} ${emojiArray[6].hexCode}   ${emojiArray[6].text}`;
   }
});
star5.addEventListener('click', () => {
   star1.innerHTML = `&#9733;`
   star2.innerHTML = `&#9733;`
   star3.innerHTML = `&#9733;`
   star4.innerHTML = `&#9733;`
   star5.innerHTML = `&#9733;`
   
   if (container.style.backgroundColor === "white") {
      result.innerHTML = `A ${emojiArray[9].value} star rating. ${emojiArray[9].hexCode} ${emojiArray[9].hexCode} ${emojiArray[9].hexCode}   ${emojiArray[9].text}`;
   }
   else {
      result.innerHTML = `A ${emojiArray[8].value} star rating. ${emojiArray[8].hexCode} ${emojiArray[8].hexCode} ${emojiArray[8].hexCode}   ${emojiArray[8].text}`;
   }
});
