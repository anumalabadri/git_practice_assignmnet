//---------------------------------------->>Check Prime number<<------------------------------------------------------//
function checkPrime(num) {
    let count = 0;
    if (num <= 1) {
      return "invalid input";
    }
    for (let i = 2; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count == 2) {
      console.log(`${num} is a prime number`);
    } else {
      console.log(`${num} is not a prime number`);
    }
  }
  let result = checkPrime(10);
  console.log(result);
  
  //------------------------------------>>checkPalindrome<<------------------------------------------------------//
  function checkPalindrome(num) {
    let arrayValues = num.toString().split("");
    let reve
  rseArrayvalues = arrayValues.reverse();
    let reverseString = reverseArrayvalues.join("");
  
    if (num == reverseString) {
      console.log("It is a palindrome");
    } else {
      console.log("It is not a palindrome");
    }
  }
  let result1 = checkPalindrome("aba");
  console.log(result1);
  