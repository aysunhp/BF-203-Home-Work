
// 1.İstifadəçidən 3 ədəd alın. Bu ədədlərin üçbucağın tərəfi olub olmadığını yoxlayan proqram tərtib edin
//#region 
// let side1 = Number(prompt("enter the first side of number"));
// let side2 = Number(prompt("enter the second side of number"));
// let side3 = Number(prompt("enter the third side of number"));

// if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//     console.log("This triangle does not exist");
// }
// else {
//     if (side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1) {
//         console.log("This is a triangle");
//     } else {
//         console.log("This triangle does not exist");
//     }
// }
//#endregion

// 2. İstifadəçidən 3 ədəd alın. Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.
//#region 
// let side1 = Number(prompt("enter the first side of number"));
// let side2 = Number(prompt("enter the second side of number"));
// let side3 = Number(prompt("enter the third side of number"));

// if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
//     console.log("This triangle does not exist");
// }
// else {
//     if (side1 == side2 && side2 == side3) {
//         console.log("This is an equilateral  triangle");
//     } else {
//         console.log("This triangle does not equilateral triangle");
//     }
// }

//#endregion


// 3. İstifadəçidən 2 ədəd alın. Hansının ən böyük olduğunu tapan proqram tərtib edin


//#region 

// let num1 = Number(prompt("enter the first number"));
// let num2 = Number(prompt("enter the second number"));

// if (num1 > num2) {
//     console.log(`${num1} is bigger than ${num2} `);
// } else if (num1 < num2) {
//     console.log(`${num2} is bigger than ${num1} `);
// } else {
//     console.log(`they are equal `);
// }

//#endregion


// 4. İstifadəçidən 3 ədəd alın. Hansının ən böyük olduğunu tərtib edin.

//#region 

// let num1 = Number(prompt("enter the first number"));
// let num2 = Number(prompt("enter the second number"));
// let num3 = Number(prompt("enter the third number"));

// if (num1 > num2 && num1 > num3) {
//     console.log(`the biggest number is ${num1} `);
// } else if (num2 > num1 && num2 > num3) {
//     console.log(`the biggest number is ${num2} `);
// } else if (num3 > num1 && num3 > num2) {
//     console.log(`the biggest number is ${num3} `);
// } else {
//     console.log(`they are equal `);
// }

//#endregion


// 5. İstifadəçidən 3 ədəd alın. Onları artan sıra ilə düzən proqram tərtib edin.

//#region 
let num1 = Number(prompt("enter the first number"));
let num2 = Number(prompt("enter the second number"));
let num3 = Number(prompt("enter the third number"));

if (num1 >= num2 && num1 >= num3 && num2 >= num3) {
    console.log(`${num3},${num2},${num1}`);
}
else if (num1 >= num2 && num1 >= num3 && num3 >= num2) {
    console.log(`${num2},${num3},${num1}`);
}
else if (num2 >= num1 && num2 >= num3 && num3 >= num1) {
    console.log(`${num1},${num3},${num2}`);
} else if (num2 >= num1 && num2 >= num3 && num1 >= num3) {
    console.log(`${num3},${num1},${num2}`);
}
else if (num3 >= num1 && num3 >= num2 && num1 >= num2) {
    console.log(`${num2},${num1},${num3}`);
}
else if (num3 >= num1 && num3 >= num2 && num2 >= num1) {
    console.log(`${num1},${num2},${num3}`);
}
//#endregion