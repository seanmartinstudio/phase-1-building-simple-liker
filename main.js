// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
// const hidden = document.querySelector('div').removeAttribute('hidden')



// Declare variable 'likeGlyph' for each like button glyph in App
const likeGlyph = document.querySelectorAll(".like-glyph")

// For loop iterating over each like button glyph
for (i = 0; i <= likeGlyph.length -1; i++) {
  likeGlyph[i].addEventListener('click', clickLikeButtonGlyph)
}


//Function for like button glyph being clicked
function clickLikeButtonGlyph(event) {
//Conditional statement if like button is empty
if(event.target.innerText = EMPTY_HEART)
  mimicServerCall()
    .then((response) => {
      console.log(response)
      event.target.innerText = FULL_HEART
      event.target.classList.add('activated-heart')
    })
    .catch((response) => {
      console.log(response)
      const hidden = document.querySelector('div')
      hidden.removeAttribute('.hidden')
})
}








//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

