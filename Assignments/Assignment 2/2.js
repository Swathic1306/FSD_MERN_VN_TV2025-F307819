let mark = 90;
let age = 21;

if (mark >= 90 && mark <= 100) {
  console.log("You Secured 'A+' grade");
} 
else if (mark >= 80 && mark <= 89) {
  console.log("You Secured 'A' grade");
}
else if (mark >= 70 && mark <= 79) {
  console.log("You Secured 'B' grade");
}
else if (mark >= 60 && mark <= 69) {
  console.log("You Secured 'B+' grade");
}
else if (mark >= 50 && mark <= 59) {
  console.log("You Secured 'C' grade");
}
else {
  console.log("You are failed");
}

(age > 18) ? console.log("You are an Adult") : console.log("You are Minor");
