const dataContainer = document.getElementById('main');
dataContainer.innerText = "";

const scrollIndicator = document.querySelector('.progress-bar');


const likesDiv = document.createElement('div');
likesDiv.innerHTML = `<i class="fa-solid fa-thumbs-up reaction" ></i>`;

const dislikesDiv = document.createElement('div');
dislikesDiv.innerHTML = `<i class="fa-solid fa-thumbs-down reaction"></i>`;

const tagsDiv = document.createElement('div');
tagsDiv.innerHTML = `<i class="fa-solid fa-hashtag"></i>`;


const api = `https://dummyjson.com/posts`;


createBox();

window.onscroll = handleScroll;

function handleScroll() {
   const getScrollFromTop =
      document.body.scrollTop || document.documentElement.scrollTop;
   const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

   const howMuchPercentageAlreadyScrolled = (getScrollFromTop / height) * 100;
   scrollIndicator.innerText = `${Math.round(howMuchPercentageAlreadyScrolled)}%`;
   scrollIndicator.style.width = `${howMuchPercentageAlreadyScrolled}%`;
}



async function getData() {
   try {
      const response = await fetch(api);
      if (!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const posts = data.posts || []; // Ensure posts is an array

      const myDataArray = [];
      for (const post of posts) {
         let obj = {};
         obj.title = `${post.title}`;
         obj.body = `${post.body}`;


         // obj.reactions = {};
         // obj.reactions.likes = `${post.reactions.likes}`;
         // obj.reactions.dislikes = `${post.reactions.dislikes}`;
         // obj.reactions = Object.assign({}, post.reactions);
         obj.reactions = { ...post.reactions };


         // obj.tags = [];
         // obj.tags.push(...post.tags);
         // obj.tags = Array.from(post.tags);
         obj.tags = [...post.tags];


         myDataArray.push(obj);
      }
      return myDataArray;
   } catch (error) {
      console.error("Error fetching data:", error);
   }
}

const testOutput = async () => {
   const data = await getData();
   console.log(data);
   console.log(data.length);

   console.log(likesDiv.innerHTML);
   console.log(dislikesDiv.innerHTML);
   console.log(tagsDiv.innerHTML);


};

// testOutput();

async function createBox() {
   const data = await getData();
   for (let i = 0; i < data.length; i++) {
      const newDiv = document.createElement("div");
      newDiv.classList.add("box");


      const title = document.createElement("h2");
      title.classList.add("title");
      title.innerText = `${data[i].title}`;
      newDiv.appendChild(title);

      
      const body = document.createElement("h3");
      body.classList.add("body");
      body.innerText = `${data[i].body}`;
      newDiv.appendChild(body);


      const reactions = document.createElement("div");
      reactions.classList.add("reactions");
      const like = document.createElement("h3");
      like.classList.add("like");
      like.innerHTML = `${likesDiv.innerHTML} ${data[i].reactions.likes}`;
      const dislike = document.createElement("h3");
      dislike.classList.add("dislike");
      dislike.innerHTML = `${dislikesDiv.innerHTML} ${data[i].reactions.dislikes}`;
      reactions.appendChild(like);
      reactions.appendChild(dislike);
      newDiv.appendChild(reactions);


      const tags = document.createElement("div");
      tags.classList.add("tags");
      for (const element of data[i].tags) {
         const tag = document.createElement("h3");
         tag.classList.add("tag");
         tag.innerHTML = `${tagsDiv.innerHTML} ${element}`;
         tags.appendChild(tag);
      }
      newDiv.appendChild(tags);


      dataContainer.appendChild(newDiv);
   }
}


