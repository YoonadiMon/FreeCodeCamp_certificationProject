// default price if 3.26
let price = 3.26;

let cid = [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]];
const coinValue = [0.01,0.05,0.1,0.25,1,5,10,20,100];
// check how many coins of each type
let coinAmounts = [];
for (let i = 0; i < cid.length; i++) {
  coinAmounts.push(Math.ceil(cid[i][1]/coinValue[i]))
}

// dom elements
const totalDisplay = document.getElementById('totalDisplay');
const totalInput = document.getElementById('totalInput');
const purchaseBtn = document.getElementById('purchase-btn');
const changeDue = document.getElementById('change-due');
const mainArea = document.getElementById('mainArea');
let cashInput;

updateCID()

// event listeners
purchaseBtn.addEventListener("click", checkChange)

// main function
function checkChange() {
  // get total price
  totalDisplay.innerText = totalInput.value;
  price = totalInput.value;

  // get cash paid
  cashInput = document.getElementById('cash');
  let cashAmount = cashInput.value;

  // console.log(`Total Price: ${price}, Cash Amount: ${cashAmount}`);
  // console.log(`${Number(price) > Number(cashAmount)}: ${price} > ${cashAmount}`);
  // :')

  if (Number(price) > Number(cashAmount)) {
    alert("Customer does not have enough money to purchase the item")
  } 
  else {
    // make space for display area in style
    mainArea.classList.add('mainGrid');
    if (Number(price) === Number(cashAmount)) {
      changeDue.innerText = "No change due - customer paid with exact cash"
    } 
    else {
    changeDue.innerHTML = calChange(price, cashAmount)
    }
  }
}

// calculate change and coins
function calChange(price, cashAmount) {
  let totalCid;
  let changeToConvert = (Number(cashAmount) - Number(price));
  let indices = []

  for (let i = coinValue.length-1; i >= 0; i--) {
    if (changeToConvert >= coinValue[i]) {
      let coinNum = 0;
      while (cid[i][1] > 0 && changeToConvert >= coinValue[i] && coinNum < coinAmounts[i]) {
        // console.log("Cashy?" + cid[i][1]);
        // console.log(`${changeToConvert}, ${coinValue[i]});
        changeToConvert = (changeToConvert - coinValue[i]).toFixed(2);
        cid[i][1] = Number((cid[i][1] - coinValue[i]).toFixed(2));
        coinNum++
        // console.log(coinNum, coinAmounts[i]);
      }
      indices.push([i, coinNum]);
    }
  }
  console.log(`indices: ${indices}`);
  updateCID()
  totalCid = calTotalCid(cid);
  console.log(cid);
  console.log(totalCid, changeToConvert);
  if (changeToConvert != 0) {
    return "Status: INSUFFICIENT_FUNDS"
  }
  return textToDisplay(indices, totalCid)
}

// render text to be displayed
function textToDisplay(indices, totalCid) {
  let displayText;
  displayText = "<p>Status: "
  if (totalCid > 0) {
    displayText += "OPEN</p>"
  }
  else {
    displayText += "CLOSED</p>"
  }
  for (let i = 0; i < indices.length; i++) {
    if (indices[i][1] != 0) {
      let index = indices[i][0];
      displayText += `<p>${cid[index][0]}: $${coinValue[index] * indices[i][1]}</p>`
    }
  }    
  return displayText
}



function updateCID() {
  // change in drawer
  for (let i = 0; i < cid.length; i++) {
    document.getElementById(`item${i}`).innerText = cid[i][1]
}
}

function calTotalCid(cid) {
  return cid.reduce((currentTotal, item)=>{
    // total + stuff after return
    return currentTotal + item[1]
  },0);
}