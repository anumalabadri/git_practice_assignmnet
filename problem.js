//---------------------------------------->>Check Prime number<<------------------------------------------------------//
function checkPrime(num) {
    let count = 0;
    if (num <= 1) {
      return "invalid input";
    }
    for (let i = 1; i <= num; i++) {
      if (num % i === 0) {
        count++;
      }
    }
    if (count == 2) {
      return (`${num} is a prime number`);
    } else {
      return (`${num} is not a prime number`);
    }
  }
  let result = checkPrime(11);
  // console.log(result);
  
  //------------------------------------>>checkPalindrome<<------------------------------------------------------//
  // function checkPalindrome(num) {
  //   let rev=(num+"").split("").reverse().join("")
  //   if(rev==num){
  //     return "Palindrome"
  //   }else{
  //     return "Not Palindrome"
  //   }

  // }
  // let result1 = checkPalindrome(1221);
  // console.log(result1);
  //--------------------------------without inbuild function palindrome--------------------------------------//
 function checkPalindrome(num) {
  let arr=(num+"").split("")
let revArr=[]
//["1","2","3"] => ["3","2","1"]
  for(let i=arr.length-1;i>=0;i--){
     revArr.push(arr[i])
  }

  if(revArr.join("")==num){
    return "Palindrome"
  }else{
    return "Not Palindrome"
  }
  }
  let result1 = checkPalindrome("madam");
  console.log(result1);


