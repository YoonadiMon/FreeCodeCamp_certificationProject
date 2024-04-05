
# Certification Projects from [freeCodeCamp](https://www.freecodecamp.org/learn)

## Projects in order of completion
| Project Name | Core Curriculum | Date of Completion |
| ----------- | ----------- | ----------- |
| [Build a Palindrome Checker](#build-a-palindrome-checker) | [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | 25-March-2024 |
| [Survey Form](#survey-form) | [Responsive Web Design](https://www.freecodecamp.org/learn/2022/responsive-web-design/) | 26-March-2024 |
| [Build a Roman Numeral Converter](#build-a-roman-numeral-converter) | [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | 28-March-2024 |
| [Build a Telephone Number Validator](#build-a-telephone-number-validator) | [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | 1-April-2024 |
| [Build a Cash Register](#build-a-cash-register) | [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | 4-April-2024 |
| [Build a Pokémon Search App](#build-a-pokémon-search-app) | [JavaScript Algorithms and Data Structures (Beta)](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures-v8/) | 5-April-2024 |

## Build a Palindrome Checker

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotPalindromeChecker.png)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Palindrome%20Checker](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Palindrome%20Checker)

### Wakatime Badge
[![wakatime](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018e748d-668f-4b78-82cc-6daa142d11bf.svg)](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018e748d-668f-4b78-82cc-6daa142d11bf)

### What I learned

To check if each character was alphanumeric:
```js
if (textInput[i].match(/[a-z0-9]/i)) {}
```

### Useful resources

- [Alphanumeric](https://stackoverflow.com/questions/388996/regex-for-javascript-to-allow-only-alphanumeric/389022#389022) - Helped me figure out how to check if the characters were alphanumeric with RegEx.

## Survey Form

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotSurveyForm.png?raw=true)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/Responsive%20Web%20Design/Survey%20Form](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/Responsive%20Web%20Design/Survey%20Form)

### Wakatime Stats
![](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018e75c2-8eac-440e-9467-4f68f08b5c70.svg)

### What I learned

To keep background fixed in position as page is scrolled:
```css 
body {
  background-attachment: fixed;
}
```

### Useful resources

- [Aligning](https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items) - Refreshed my knowledge regarding align-items and align-content.

## Build a Roman Numeral Converter

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotRoman%20Numeral%20Converter.png?raw=true)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Roman%20Numeral%20Converter](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Roman%20Numeral%20Converter)

### Wakatime Stats
![](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018e7f38-083c-453a-a646-9d57055bf78a.svg)

### What I learned

I spent ≈ 3 and a half hour figuring out the logic behind the converter and turning it into JS code. It took me longer than I hoped it did but I also learnt a lot. :sweat_smile:

### Useful resources

- [Roman Numeral](https://www.hunter.cuny.edu/dolciani/pdf_files/brushup-materials/reading-and-writing-roman-numerals.pdf) - READING AND WRITING ROMAN NUMERALS.

## Build a Telephone Number Validator

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotTelephoneNumberValidator.png?raw=true)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Telephone%20Number%20Validator](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Telephone%20Number%20Validator)

### Wakatime Stats
![wakatime](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018e946e-eda8-4e53-8b9c-af8a2a545be8.svg)

### What I learned

To remove spaces:
```js
checkNum = checkNum.replace(/ /g,'')
```
To check if character is not a number
```js
if (isNaN(userInput[i)) {}
```

### Useful resources

Some of the Stack Overflow pages I looked through.
- [Number](https://stackoverflow.com/questions/1779013/check-if-string-contains-only-digits) 
- [White Spaces](https://stackoverflow.com/questions/6623231/remove-all-white-spaces-from-text)

For the SVG at the bottom
- [Shape Divider](https://www.shapedivider.app/)

## Build a Cash Register

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotCashRegister.png?raw=true)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Cash%20Register](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Cash%20Register)

### Wakatime Badge
![](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018ea6f3-b691-43d4-b31d-1d67dc1b0ea0.svg)

### What I learned

Round to two decimal:
```js
changeToConvert = (Number(cashAmount) - Number(price)).toFixed(2)
```

### Useful resources

- [https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary](https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary)

## Build a Pokémon Search App

### Page Screenshot
![](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/blob/main/Screenshots/ScreenshotPok%C3%A9monSearchApp.png?raw=true)
Github Repo: [https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Pokemon%20Search%20App](https://github.com/YoonadiMon/FreeCodeCamp_certificationProject/tree/main/JavaScript%20Algorithms%20and%20Data%20Structures%20(Beta)/Build%20a%20Pokemon%20Search%20App)

### Wakatime Stats
[![wakatime](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018eabe0-5f77-4f0d-83c1-6ca2f981d3ba.svg)](https://wakatime.com/badge/user/018e0ede-5109-4231-a915-219f103a6ca7/project/018eabe0-5f77-4f0d-83c1-6ca2f981d3ba)

### What I learned

To keep background fixed in position as page is scrolled:
```javascript
  fetch('url')
  .then((res)=>res.json())
  .then((data)=>{})
  .catch((err)=>console.error(`There is an error: ${err}`));
```

### Useful resources

- [Promises and .then](https://stackoverflow.com/questions/27539262/whats-the-difference-between-align-content-and-align-items](https://stackoverflow.com/questions/34094806/return-from-a-promise-then)

  
# Acknowledgments

Forever thankful to [freeCodeCamp](https://www.freecodecamp.org/learn). Hoping that one day I could contribute back to such amazing community.
