const btn = document.querySelector('.icon');
const sidebar=document.querySelector('.sidebar');


btn.addEventListener('click', () => {
   if(sidebar.style.transform === "translateX(0px)"){
      sidebar.style.transform = "translateX(-220px)";
      btn.style.transform = "rotateZ(0deg)";
      btn.style.color = "black";
   } else{
      sidebar.style.transform = "translateX(0px)";
      btn.style.transform = "rotateZ(90deg)";
      btn.style.color = "lightcoral";
   }
});