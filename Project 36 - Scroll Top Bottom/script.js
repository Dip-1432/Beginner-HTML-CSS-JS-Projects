const dataContainer = document.getElementById('main');
const topBtn = document.getElementById('top');
const bottomBtn = document.getElementById('bottom');


dataContainer.textContent = "";
const limit = 50;
const api = `https://dummyjson.com/users?limit=${limit}`;



createBox();

topBtn.addEventListener("click", () => {
   window.scrollTo({
      top: 0,
      behavior: "smooth"
   })
});

bottomBtn.addEventListener("click", () => {
   window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
   })
});


async function getData() {
   try {
      const response = await fetch(api);
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const users = data.users || []; // Ensure users is an array

      const myDataArray = [];
      for (const user of users) {
         let obj = {};
         obj.name = `${user.firstName} ${user.lastName}`;
         obj.age = user.age;
         obj.gender = `${user.gender}`;
         myDataArray.push(obj);
      }
      return myDataArray;
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}


const testOutput = async () => {
   const data = await getData();
   console.log(data.length === limit);
   // console.log(data);
}

// testOutput();


async function createBox() {
   const data = await getData();
   for (let i = 0; i < limit; i++) {
      const newDiv = document.createElement('div');
      newDiv.classList.add('box');
      const name = document.createElement('h2');
      name.classList.add('head2');
      name.innerText = `name: ${data[i].name}`;
      const age = document.createElement('h3');
      age.classList.add('head3');
      age.innerText = `age: ${data[i].age}`;
      const gender = document.createElement('h3');
      gender.classList.add('head3');
      gender.innerText = `gender: ${data[i].gender}`;
      newDiv.appendChild(name);
      newDiv.appendChild(age);
      newDiv.appendChild(gender);
      newDiv.appendChild(gender);
      dataContainer.appendChild(newDiv);
   }
}

