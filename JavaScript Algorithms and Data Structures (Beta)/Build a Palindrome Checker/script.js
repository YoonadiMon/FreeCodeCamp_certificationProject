const textInputEl = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener("click", check);

function check() {
  const textInput = textInputEl.value;
  let textToDisplay;

  // debug
  // console.log('checked');
  // console.log(`Text entered to check: ${textInput}`);

  // alert if nothing is entered
  if (textInput === '') {alert("Please input a value")}
  else {
  // if input's not empty check palidrome
  textToDisplay = checkPali(textInput);
  result.innerHTML = textToDisplay;
  }
}

function checkPali(textInput) {
  let textToCheck = '';
  let reverseText = '';
  for (let i = 0; i < textInput.length; i++) {
    if (textInput[i].match(/[a-z0-9]/i)) {
      textToCheck += textInput[i];
    }
    textToCheck = textToCheck.toLowerCase();
  }
  for (let i = textToCheck.length - 1; i >= 0; i --) {
    reverseText += textToCheck[i];
  }

  // debug
  // console.log(`Text to check: ${textToCheck}, Array: ${textArr}`);
  // console.log(`Reversed text: ${reverseText}`);

  if (textToCheck === reverseText) {
    return `<b>${textInput}</b> is a palindrome`
  } else {
    return `<b>${textInput}</b> is not a palindrome`
  }
}
