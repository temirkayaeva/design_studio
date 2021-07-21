const left_arrow_in_web_avatars = document.querySelector(".web_avatars .button_left")
const right_arrow_in_web_avatars = document.querySelector(".web_avatars .right_left")
const picture_in_web = document.querySelector(".web_avatars .picture")

left_arrow_in_web_avatars.addEventListener("click", function() {
  picture_in_web.classList.remove("image")
  picture_in_web.classList.add("click_on_left_arrow")
})