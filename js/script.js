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



allLinks = document.querySelectorAll('.link a');

for (let item of allLinks) {
  item.addEventListener('mouseover', function (e) {
    console.log(this);
    console.log(e);
    let underline = e.target.children;
    console.log(underline);
    underline[0].classList.add('underline');
  });
  item.addEventListener('mouseout', function (e) {
    console.log(this);
    console.log(e);
    let underline = e.target.children;
    console.log(underline);
    underline[0].classList.remove('underline');
  });
}
