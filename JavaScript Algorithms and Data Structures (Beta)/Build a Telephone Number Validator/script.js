let displayArea = document.getElementById('results-div');
const initialImg = document.getElementById('initialImg');

const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');

checkBtn.addEventListener('click', display)
clearBtn.addEventListener('click', ()=> {
  displayArea.innerHTML = ''
})

let valid = 'Invalid';


function display() {
  initialImg.style.display = 'none';
  displayArea.style.display = 'block';
  displayArea.style.justifyContent = 'start';
  displayArea.classList.add('displayNum');

  const userInput = document.getElementById('user-input').value;
  let checkNum = '';
  let extraChar = [];
  if (userInput.length === 0) {
    alert("Please provide a phone number")
  }
  else {
    if (isNaN(userInput[0])) {
      displayArea.innerHTML += displayText(userInput, valid)
    }
    else {
      for (let i = 0; i <= userInput.length - 1; i++) {
        if (!isNaN(userInput[i])) {
          checkNum += userInput[i]
        }
        else {
          extraChar.push(userInput[i])
        }
      }
      checkNum = checkNum.replace(/ /g,'')
      // console.log(`Number being checked: ${userInput}`);
      // console.log(`Extra characters: ${extraChar}`);
      if (checkValid(checkNum, extraChar) === true) {
        valid = 'Valid'
      }
      else {
        valid = 'Invalid'
      }
      console.log(`## Validity: ${valid}`);
      displayArea.innerHTML += displayText(userInput, valid)
    }
  }  
}

function displayText(userInput, valid) {
  let textToDisplay;
  if (valid === 'Invalid') {
    textToDisplay = `<p class="invalidNum">${valid} US number: ${userInput}<p>`
  }
  else {
    textToDisplay = `<p class="validNum">${valid} US number: ${userInput}<p>`
  }
  return textToDisplay
}

function checkValid(checkNum, extraChar) {
  // console.log(`Number length and country code: ${Number(checkNum.length)}, ${Number(checkNum[0])}`);

  let dashCount = 0;
  let open = 0;
  let close = 0;

  if (Number(checkNum.length) <= 9) return false
  if (Number(checkNum.length) === 11) {
    if (Number(checkNum[0]) !== 1) {
      return false
    }
  }
  if (Number(checkNum.length) > 11) return false

  extraChar.forEach(item => {
    if (item === '-') {
      dashCount++
    }
    if (item === '(') {
      open++
    }
    if (item === ')') {
      close++
    }
  });
  if (dashCount > 2) return false
  if (!(open === 0 && close === 0) && !(open === 1 && close === 1)) return false
  return true
}