const accordionData = [
   {
      id: 1,
      question: "What is an accordion in web design?",
      answer:
         "An accordion is a user interface component that allows users to expand and collapse sections of content, making it easier to navigate through large amounts of information.",
   },
   {
      id: 2,
      question: "Why use an accordion in a project?",
      answer:
         "Accordions help save space on a webpage by hiding content until it is needed, which improves the user experience by allowing users to focus on relevant information.",
   },
   {
      id: 3,
      question: "What technologies are used to create an accordion?",
      answer:
         "Creating an accordion involves using HTML for structure, CSS for styling, and JavaScript for interactivity, allowing for a functional and visually appealing component.",
   },
   {
      id: 4,
      question: "How do you structure an accordion using HTML?",
      answer:
         "An accordion is structured with a container element that holds multiple items, each consisting of a clickable header and a content section that can be shown or hidden.",
   },
   {
      id: 5,
      question: "How do you style an accordion with CSS?",
      answer:
         "CSS is used to style the accordion by setting properties for headers and content sections, typically hiding the content by default and styling headers to indicate they are clickable.",
   },
   {
      id: 6,
      question: "How does JavaScript make the accordion interactive?",
      answer:
         "JavaScript adds interactivity by listening for click events on headers and toggling the visibility of the corresponding content sections, allowing users to expand or collapse information.",
   },
   {
      id: 7,
      question: "Can an accordion be nested?",
      answer:
         "Yes, accordions can be nested within each other, which allows for more complex content organization, such as displaying hierarchical information like categories and subcategories.",
   },
   {
      id: 8,
      question: "What are some accessibility considerations for accordions?",
      answer:
         "Accessibility considerations include ensuring keyboard navigation and using ARIA attributes to communicate the state of accordion items to assistive technologies, making it usable for everyone.",
   },
   {
      id: 9,
      question: "How can you enhance an accordion with animations?",
      answer:
         "Enhancing an accordion with animations can improve the visual experience by applying CSS transitions for smooth effects when expanding or collapsing content sections.",
   },
   {
      id: 10,
      question: "What are some common use cases for accordions?",
      answer:
         "Common use cases for accordions include FAQs, product descriptions, and menus, as they help organize information in a compact and user-friendly manner.",
   },
];

const container = document.querySelector('.accordion');

function createAccData() {
   accordionData.forEach((obj) => {
      const divCont = document.createElement('div');
      divCont.classList.add('section');
      const accQues = document.createElement('h3');
      const ques = document.createTextNode(obj.question);
      // console.log(accQues);
      // console.log(ques);
      const accBtn = document.createElement('button');
      accBtn.textContent = "ans";
      // console.log(accBtn);
      // console.log(btnText);
      const accAns = document.createElement('p');
      const ans = document.createTextNode(obj.answer);
      // console.log(accAns);
      // console.log(ans);

      accQues.appendChild(ques);
      accAns.appendChild(ans);

      divCont.appendChild(accQues);
      divCont.appendChild(accBtn);
      divCont.appendChild(accAns);

      divCont.classList.add('container');
      container.appendChild(divCont);
      // accAns.classList.add('hidden');
      // btnText.textContent = "Show Ans";
   });
}
createAccData();

const sections = document.querySelectorAll('.section');
// console.log(sections);


sections.forEach((sec) => {
   const btn = sec.children[1];
   // console.log(btn);
   const ans = sec.children[2];
   // console.log(ans);
   btn.textContent = "Show Ans";
   ans.classList.add('hidden');
   btn.addEventListener('click', () => {
      if (ans.classList.contains('hidden')) {
         ans.classList.remove('hidden');
         btn.textContent = "Hide Ans";
      }
      else {
         ans.classList.add('hidden');
         btn.textContent = "Show Ans";
      }
   })
});
