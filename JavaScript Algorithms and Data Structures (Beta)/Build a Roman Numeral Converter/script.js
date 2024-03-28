// set variables
const romanNumerals =  ["I", "V", "X", "L", "C", "D", "M"];
const arabicNumerals = [1,    5,   10,  50, 100, 500, 1000];
let convertedRNum;

const convertBtn = document.getElementById('convert-btn');
const output = document.getElementById('output');

convertBtn.addEventListener('click', primaryConverter);

let numInput = document.getElementById('number');
numInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    primaryConverter();
  }
})

function primaryConverter() {
  // add class
  output.classList.add('outputArea')

  // Input
  // user input variable and turning it into array
  let numInput = document.getElementById('number').value;
  if (numInput.length === 0) {
    output.innerText = "Please enter a valid number"
  } else if (numInput < 0) {
    output.innerText = "Please enter a number greater than or equal to 1"
  } else if (numInput > 3999) {
    output.innerText = "Please enter a number less than or equal to 3999";
  }
  else {
    let numInputStr = numInput.toString();
    const numberLength = numInputStr.length;
    let numInputArr = [];
    for (let n = numberLength - 1; n >=  0 ; n--) {
      numInputArr.push(numInputStr[n]);
    }
    // console.log(`Current Number Array: ${numInputArr}`);
  
    // Process
    // Main Function
    convertedRNum = convertNum(numberLength, numInput, numInputArr);
  
    // Output
    output.classList.add('outputArea')
    output.innerHTML = convertedRNum;
  
    // Console out the converted number
    // console.log('%c Script End Result', 'color: #1E90FF');
    // console.log(`Converted Roman Number: ${convertedRNum}`);
  }
}

function convertNum(numberLength, numInput, numInputArr) {
  // console.log('%c convertNum()', 'color: blueviolet');

  // temp number variables
  let tempNum;
  let tempThousand;
  let tempHundred;
  let tempTen;
  let tempOne;

  if (numberLength < 1) {console.log("%c Enter a number: ", 'color: red')};
  tempNum = checkMainNum(numInput);

  if (tempNum === false) {
    if (numberLength <= 4) {
      tempThousand = convertThousands(numInputArr);
      // console.log(`converting thousands: ${tempThousand}`);
    }
    if (numberLength >= 3) {
      tempHundred = convertHundreds(numInputArr);
      // console.log(`converting hundreds: ${tempHundred}`);
    }
    if (numberLength >= 2) {
      tempTen = convertTens(numInputArr);
      // console.log(`converting tens: ${tempTen}`);
    }
    tempOne = convertOnes(numInputArr);
    // console.log(`converting ones: ${tempOne}`);

    return (tempThousand !== undefined ? tempThousand : '')
    + (tempHundred !== undefined ? tempHundred : '')
    + (tempTen !== undefined ? tempTen : '') 
    + tempOne;
  }
  // console.log(`Converting: ${convertedRNum}`);
  return tempNum;
}

function convertOnes(numInputArr) {
  // console.log('%c convertOnes()', 'color: blueviolet');
  let tempDigit;
  let digitToConvert = numInputArr[0];
  tempDigit = checkMainDigit(digitToConvert, 1);
  if (tempDigit === false) {
    return checkNotMain(digitToConvert, 0);
  };
  return tempDigit;
}

function convertTens(numInputArr) {
  // console.log('%c convertTens()', 'color: blueviolet');
  let digitToConvert = numInputArr[1];
  let tempDigit;
  tempDigit = checkMainDigit(digitToConvert, 10);
  if (tempDigit === false) {
    return checkNotMain(digitToConvert, 2);
  }
  return tempDigit;
}

function convertHundreds(numInputArr) {
  // console.log('%c convertHundreds()', 'color: blueviolet');
  let digitToConvert = numInputArr[2];
  let tempDigit;
  tempDigit = checkMainDigit(digitToConvert, 100);
  if (tempDigit === false) {
    return checkNotMain(digitToConvert, 4);
  }
  return tempDigit;
}

function convertThousands(numInputArr) {
  // console.log('%c convertThousands()', 'color: blueviolet');
  let digitToConvert = numInputArr[3];
  if (digitToConvert !== undefined) {
    let tempDigit;
    tempDigit = checkMainDigit(digitToConvert, 1000);
    if (tempDigit === false) {
      return checkNotMain(digitToConvert, 6);
    }
    return tempDigit;
  }
  return undefined
}

function checkMainNum(numInput) {
  // console.log('%c checkMainNum()', 'color: blueviolet');
  for (let i = 0; i < arabicNumerals.length; i++) {
    if (numInput === arabicNumerals[i]) {
      return romanNumerals[i];
    }
  }
  return false
}

function checkMainDigit(digitToConvert, decimalValue) {
  // console.log('%c checkMainDigit()', 'color: blueviolet');
  for (let i = 0; i < arabicNumerals.length; i++) {
    // console.log(`${digitToConvert * decimalValue} === ${arabicNumerals[i]}`);
    if (Number(digitToConvert * decimalValue) === arabicNumerals[i]) {
      return romanNumerals[i];
    }
  }
  return false
}

function checkNotMain(digitToConvert, index) {
  // console.log('%c checkNotMain()', 'color: blueviolet');
  if (digitToConvert <= 3 ) {
    return romanNumerals[index].repeat(digitToConvert)
  } else if (digitToConvert > 5 && digitToConvert < 9) {
    return romanNumerals[index+1] + romanNumerals[index].repeat(digitToConvert - 5)
  } else if (digitToConvert < 5) {
    return romanNumerals[index] + romanNumerals[index+1]
  } else {
    return romanNumerals[index] + romanNumerals[index+2]
  }
}