console.log("Dulce Face Painting Website Loaded 🎨✨");

window.addEventListener("scroll", function(){

const cards=document.querySelectorAll(".card");

cards.forEach(card=>{

const position=card.getBoundingClientRect().top;

if(position < window.innerHeight){

card.style.opacity="1";
card.style.transform="translateY(0)";

}

});

});
