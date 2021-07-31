const left_arrow_in_web_avatars = document.querySelector(".web_avatars .button_left")
const right_arrow_in_web_avatars = document.querySelector(".web_avatars .button_right")
const picture_in_web = document.querySelector(".web_avatars .picture")

left_arrow_in_web_avatars.addEventListener("click", () => {
  picture_in_web.classList.remove("image")
  picture_in_web.classList.remove("click_on_right_arrow")
  picture_in_web.classList.add("click_on_left_arrow")
});

right_arrow_in_web_avatars.addEventListener("click", () => {
  picture_in_web.classList.remove("image")
  picture_in_web.classList.add("click_on_right_arrow")
});


const allLinks = document.querySelectorAll('.link');

console.log(allLinks);

for (i = 0; i < allLinks.length; i++) {
    allLinks[i].onmouseover = function() {
      allUnderlines = document.querySelectorAll('.link div');
      for (j = 0; j < allUnderlines.length; j++) {  
        allUnderlines[j].classList.add('underline');
      }
    }
    allLinks[i].onmouseout = function() {
      allUnderlines = document.querySelectorAll('.link div');
      for (j = 0; j < allUnderlines.length; j++) {  
        allUnderlines[j].classList.remove('underline');
      }
    }
}