const nav=document.querySelector(".nav");
const bottom = document.querySelector(".bottom");

console.log(nav);
console.log(nav.offsetHeight);   ///y] height of the element including padding and border
console.log(bottom);
console.log(bottom.offsetTop); ///y] distance from the top of its offset parent element
console.log(bottom.offsetParent);   ///y] the offset parent element

console.log(window.scrollY);  ///y] the number of pixels the window has scrolled vertically

console.log(nav.classList);   ///y] returns a DOMTokenList object
console.log(bottom.classList);   ///y] returns a DOMTokenList object



