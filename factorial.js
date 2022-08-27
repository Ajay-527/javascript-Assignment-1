let num = prompt("Enter the number");
num = parseInt(num);
let res = 1;

if (num == 0 || num == 1) {
  res = res;
} else {
  for (var i = num; i >= 1; i--) {
    res = res * i;
  }
  res = res;
}
console.log("Factorial of " + num + " is " + res);
