var showtime = null ;
export const initializeSlider =  function (){
          
const slider = document.querySelector(".slider");

const pictures = document.querySelectorAll(".picture");

const totalpicture = pictures.length;
var index = 1;
const maxdown = totalpicture * pictures[1].offsetTop;
const maxup = pictures[0].offsetTop;

window.onload = () =>{
    index = 1 ;
    window.scrollBy({
        top: -maxdown,
        behavior: "smooth", 
      });
}  

let position = pictures[1].offsetTop;

showtime=setInterval(function () {
        if (index === totalpicture) {
          window.scrollBy({
            top: -maxdown,
            behavior: "smooth", 
          });
    
          index = 0;
        } else {
          window.scrollBy({
            top: position, 
            behavior: "smooth", 
          });
        }
    
       
        index++;
      }, 5000);
      
  document.addEventListener("wheel", function (item) {
    clearInterval(showtime);
  })
}

export const stopSlider = function (){
        clearInterval(showtime) ;
}