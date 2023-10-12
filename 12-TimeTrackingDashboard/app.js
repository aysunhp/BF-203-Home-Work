// 1. İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin

// let side1 = Number(prompt("Enter side1"));
// let side2 = Number(prompt("Enter side2"));
// let side3 = Number(prompt("Enter side3"));

// if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//   alert("This triangle isn't exist");
// }
// else if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//   alert("This is a triangle")
// }
// else {
//   alert("This triangle isn't exist");
// }

// 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

// let equilateral1 = Number(prompt("Enter number equilateral1"));
// let equilateral2 = Number(prompt("Enter number equilateral2"));
// let equilateral3 = Number(prompt("Enter number equilateral3"));

// if (equilateral1 <= 0 || equilateral2 <= 0 || equilateral3 <= 0) {
//   alert("This triangle isn't exist. ");
// }
// else if (equilateral1 === equilateral2 && equilateral2 === equilateral3) {
//   alert("This is an equilateral triangle");
// }
// else {
//   alert("This isn't an equilateral triangle");
// }

// 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin

// let maxnum1 = Number(prompt("Enter number maxnum1"));
// let maxnum2 = Number(prompt("Enter number maxnum2"));

// if (maxnum1 > maxnum2) {
//   alert(`Max number is ${maxnum1}`);
// } else if (maxnum1 < maxnum2) {
//   alert(`Max number is ${maxnum2}`);
// }
// else {
//   alert(`They are equal`);
// }

// 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.

// let maxnumber1 = Number(prompt("Enter number maxnumber1"));
// let maxnumber2 = Number(prompt("Enter number maxnumber2"));
// let maxnumber3 = Number(prompt("Enter number maxnumber3"));

// if (maxnumber1 > maxnumber2 && maxnumber1 > maxnumber3) {
//   alert(`max number is  ${maxnumber1}`);
// } else if (maxnumber2 > maxnumber1 && maxnumber2 > maxnumber3) {
//   alert(`max number is ${maxnumber2}`);
// } else if (maxnumber3 > maxnumber1 && maxnumber3 > maxnumber1) {
//   alert(`max number is ${maxnumber3}`);
// } else {
//   alert(`They are equal`);
// }

// 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin

// let num1 = Number(prompt("Enter number num1"));
// let num2 = Number(prompt("Enter number num2"));
// let num3 = Number(prompt("Enter number num3"));

// if (num1 >= num2 && num1 >= num3) {
//   let max = num1;
//   if (num2 >= num3) {
//     let avg = num2;
//     let min = num3
//     alert(`${min} ${avg} ${max}`);
//   }
//   else {
//     let avg = num3;
//     let min = num2;
//     alert(`${min} ${avg} ${max}`);
//   }
// }
// else if (num2 >= num1 && num2 >= num3) {
//   if (num1 >= num3) {
//     let avg = num1;
//     let min = num3;
//     alert(`${min} ${avg} ${max}`);
//   }
//   else {
//     let avg = num3;
//     let min = num1;
//     alert(`${min} ${avg} ${max}`);
//   }
// }
// else {
//   let max = num3;
//   if (num1 >= num2) {
//     let avg = num1;
//     let min = num2;
//     alert(`${min} ${avg} ${max}`);
//   } else {
//     let avg = num2;
//     let min = num1;
//     alert(`${min} ${avg} ${max}`);
//   }
// }
