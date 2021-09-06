// const password = document.getElementById('password')
// const background = document.getElementById('background')

// password.addEventListener('input', (e) => {
//   const input = e.target.value
//   const length = input.length
//   const blurValue = 25 - length * 2
//   background.style.filter = `blur(${blurValue}px)`
// })
const background = document.getElementById('background')
const password = document.getElementById('password')
 
password.addEventListener('input', unblurImage)
 
function unblurImage() {
  if (password.value.length < 10) {
    background.style.filter = `blur(${20 - password.value.length * 2}px)`
  } else {
    background.style.filter = `blur(0px)`
  }
}
