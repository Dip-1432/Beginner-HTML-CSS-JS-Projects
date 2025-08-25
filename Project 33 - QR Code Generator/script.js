const word = "dipayan";
const size = 300;
const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`;

const input = document.getElementById("user-input");
const button = document.getElementById("btn");
const container = document.querySelector(".container");

container.innerHTML = "";

button.addEventListener("click", () => {
   const word = input.value;
   const size = 150;
   const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${word}`;
   fetch(url)
      .then((response) => response.blob())
      .then((blob) => {
         const img = document.createElement("img");
         img.src = URL.createObjectURL(blob);
         img.alt = "QR Code";
         container.innerHTML = "";
         container.appendChild(img);
      })
      .catch((error) => console.log(error));
});
