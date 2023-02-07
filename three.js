const match = (expression , allcases) => {
  return allCases[expression] || allCases?.default
}
const allCases ={
  21:"she is 21 years old",
  22: "she is 22 years old",
  default:"She is an adult"
}
console.log(match(21, allCases));
console.log( match(88, allCases))

