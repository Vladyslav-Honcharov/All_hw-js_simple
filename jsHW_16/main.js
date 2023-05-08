const n = +prompt("Enter number");
const fib = (n) => {
  if (n >= 0) {
    let prev = 0,
      next = 1;
    for (let i = 0; i < n; i++) {
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return prev;
  } else {
    let prev = 0,
      next = -1;
    for (let i = 0; i < -n; i++) {
      let temp = next;
      next = prev + next;
      prev = temp;
    }
    return prev;
  }
};
alert(fib(n));

// function fib(f0, f1, n) { if (n === 0) return f0
//   else if (n === 1) return f1
//   else if (n > 0) return fib(f0, f1, n - 2) + fib(f0, f1, n - 1)
//   else if (n < 0) return fib(f0, f1, n + 2) - fib(f0, f1, n + 1) }
//   function getNumber() { let inputNumber = +prompt('Enter number').trim()
//   while (isNaN(inputNumber)
//   !Number.isInteger(inputNumber)  inputNumber > 20) {
//      alert('The number does not meet the conditions')
//      inputNumber = +prompt('Enter number', [inputNumber]).trim()
//     } return inputNumber }
//     alert(fib(0, 1, getNumber()))
//     console.log(fib(0, 1, -10))
//     -55 console.log(fib(0, 1, 10))
//     55 console.log(fib(0, 1, -5))
//     5 console.log(fib(0, 1, 5))
//      5
