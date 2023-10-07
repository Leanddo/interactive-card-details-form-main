function checkForLetter() {
  const userInput = document.getElementById('userInput').value;

  if (/[a-zA-Z]/.test(userInput)) {
    console.log("The input contains a letter.");
    // Your code to execute when the input contains a letter
  } else {
    console.log("The input does not contain a letter.");
    // Your code to execute when the input does not contain a letter
  }
}

let cNumber = document.getElementById('input1');
cNumber.addEventListener('keyup', function(e){
 let num = cNumber.value;

 let newValue = '';
 num = num.replace(/\s/g, '');
 for(var i = 0; i < num.length; i++) {
  if(i%4 == 0 && i > 0) newValue = newValue.concat(' ');
  newValue = newValue.concat(num[i]);
  cNumber.value = newValue;
 }
});
