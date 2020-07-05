class Calc {
  constructor(prevOpTextElement, curOpTextElement) {
    this.prevOpTextElement = prevOpTextElement
    this.curOpTextElement = curOpTextElement
    this.clear()
  }

  clear() {
    this.curOp = ''
    this.prevOp = ''
    this.operation = undefined
  }

  delete() {
    this.curOp = this.curOp.toString().slice(0, -1)
  }

  appendNum(number) {
    if (number === '.' && this.curOp.includes('.')) return
    this.curOp = this.curOp.toString() + number.toString()
  }

  selectOperation(operation) {
    if (this.curOp === '') return
    if (this.prevOp !== '') {
      this.com()
    }
    this.operation = operation
    this.prevOp = this.curOp
    this.curOp = ''
  }

  com() {
    let computation
    const prev = parseFloat(this.prevOp)
    const cur = parseFloat(this.curOp)
    if (isNaN(prev) || isNaN(cur)) return
    switch (this.operation) {
      case '+':
        computation = prev + cur
        break
      case '-':
        computation = prev - cur
        break
      case '*':
        computation = prev * cur
        break
      case '/':
        computation = prev / cur
        break
      case '%':
        computation = prev % cur
        break
        
      
      default:
        return
    }
    this.curOp = computation
    this.operation = undefined
    this.prevOp = ''
  }

  getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if (isNaN(integerDigits)) {
      integerDisplay = ''
    } else {
      integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
    }
    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`
    } else {
      return integerDisplay
    }
  }

  Display() {
    this.curOpTextElement.innerText =
      this.getDisplayNumber(this.curOp)
    if (this.operation != null) {
      this.prevOpTextElement.innerText =
        `${this.getDisplayNumber(this.prevOp)} ${this.operation}`
    } else {
      this.prevOpTextElement.innerText = ''
    }
  }
}

function sqr(){
  
  document.getElementById("numberButtons").innerHTML= Math.sqrt(data-number);
  
}

function ab(){
  
  document.getElementById("numberButtons").innerHTML= Math.abs(data-number);
  
  
}



const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalstoButton = document.querySelector('[data-equalsto]')
const deleteButton = document.querySelector('[data-delete]')
const clearButton = document.querySelector('[data-clear]')
const prevOpTextElement = document.querySelector('[data-prev-Op]')
const curOpTextElement = document.querySelector('[data-cur-Op]')

const calculator = new Calc(prevOpTextElement, curOpTextElement)

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNum(button.innerText)
    calculator.Display()
  })
})

operationButtons.forEach(button => {
  button.addEventListener('click', () => {
    calculator.selectOperation(button.innerText)
    calculator.Display()
  })
})

equalstoButton.addEventListener('click', button => {
  calculator.com()
  calculator.Display()
})

clearButton.addEventListener('click', button => {
  calculator.clear()
  calculator.Display()
})

deleteButton.addEventListener('click', button => {
  calculator.delete()
  calculator.Display()
})








//VALIDATION FORM UI

function validation(){
  var fullname = document.getElementById("fullname").value;
  
  var phoneno = document.getElementById("phoneno").value;

  var emailid = document.getElementById("emailid").value;

  // var letters = /^[^0-9][0-9a-zA-Z]+$/;
  //var msg = document.getElementById("msg").value;
  //var letters = ^(?![0-9]|[_].*$).*;
  var text;
  if(fullname.length < 5){
    text = "Please Enter valid Name";
    msg.innerHTML = text;
    alert("Please enter only alphabets");
    return false;
  }
  
  if(isNaN(phoneno) || phoneno.length != 10){
    text = "Please Enter valid Phone Number";
    msg.innerHTML = text;
    alert("Invalid number please enter a valid phone number ");
    return false;
  }
  if(emailid.indexOf("@") == -1 || emailid.length < 6 || emailid.indexOf(".") == -1){
    text = "Please Enter valid Email";
    msg.innerHTML = text;
    alert("please enter a valid email address");
    return false;
  }
  
  alert("Form Submitted Successfully!");
  return true;
}


//Palindrome and Anagram check
function palindrome(str_id){
var  regexp = /[\W_]/g;
var smstr = str_id.toLowerCase().replace(regexp,"");
var reversing = smstr.split("").reverse().join("");
if (reversing === smstr){
  alert("The string entered is a palindrome");
  return true;
} 
  alert("The string entered is not a palindrome");
  return false;
}




function checkAnagrams(str1_id, str2_id){

  var newstr1 = str1_id.toLowerCase().split('').sort().join();
  var newstr2 = str2_id.toLowerCase().split('').sort().join();

  if(newstr1 == newstr2){
    console.log("String is Anagrams");
    alert("Word is an Anagram");
    return true;
  }
  else{
    console.log("String is Not Anagrams");
    alert("Word is not an Anagram");
    return false;
  }

}
