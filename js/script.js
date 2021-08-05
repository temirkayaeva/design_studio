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

// link1 = document.querySelector('.link1');
// link2 = document.querySelector('.link2');
// link3 = document.querySelector('.link3');
// link4 = document.querySelector('.link4');

// link1.addEventListener('mouseover', underlineOn);
// link1.addEventListener('mouseout', underlineOff);
// link2.addEventListener('mouseover', underlineOn);
// link2.addEventListener('mouseout', underlineOff);
// link3.addEventListener('mouseover', underlineOn);
// link3.addEventListener('mouseout', underlineOff);
// link4.addEventListener('mouseover', underlineOn);
// link4.addEventListener('mouseout', underlineOff);

// function underlineOn () {
//   line = this.querySelector('div');
//   line.classList.toggle('underline');
// }

// function underlineOff() {
//   line = this.querySelector('div');
//   line.classList.remove('underline');
// }

// allLinks = document.querySelectorAll('.link');



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