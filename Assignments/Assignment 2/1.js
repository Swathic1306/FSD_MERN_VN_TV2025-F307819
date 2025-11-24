let input = 9

const checkNumber = (input) => {
  if (input % 2 === 0) {
    console.log("Given Number is Even")
  } else {
    console.log("Given Number is Odd")
  }

  if (input > 0) {
    console.log("The Number is Positive")
  } else if (input < 0) {
    console.log("The Number is Negative")
  } else {
    console.log("Number is Zero")
  }

  if (input % 3 === 0 && input % 5 === 0)
     {
    console.log("It is Divisible by both 3 and 5")
  } else {
    console.log("It is Not divisible by both 3 and 5")
  }
};

checkNumber(input);
