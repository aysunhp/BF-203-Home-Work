// 1. Son rəqəmi 7 olan bütün iki rəqəmli ədədləri çapa verən proqram tərtib edin.

//#region
// for (let i = 10; i < 100; i++) {
//     if (i % 10 == 7) {
//         console.log(i);
//     }
// }
//#endregion


// 2. Rəqəmləri eyni olan bütün iki rəqəmli ədələrin çapa verən proqram tərtib edin.

// for (let i = 10; i < 100; i++) {
//     if (i % 11 == 0) {
//         console.log(i);
//     }
// }


// 3. Verilmiş ədədi rəqəmlərinə ayıran proqram tərtib edin.

//  string version:
//#region
// let num = prompt("enter the number");
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i])
// }
// //#endregion

// number version:
//#region
// let num = Number(prompt("enter the number"));

// while (num > 0) {
//     let digit = num % 10;
//     num = Math.trunc(num / 10);
//     console.log(digit);
// }

//#endregion


// 4. Verilmiş ədədin rəqəmlərindən ən böyük olanı təyin edən proqram tərtib edin

//#region
// let num = prompt("enter the number");
// let max = num[0];
// for (let i = 0; i < num.length; i++) {
//     if (max < num[i]) {
//         max = num[i];
//     }
// }
// console.log(max);

//#endregion


// 5. Verilmiş ədədin rəqəmlərinin cəmini, hasilini və ədədi ortasını tapan proqram tərtib edin.

//#region

// let num = Number(prompt("enter the number"));
// let sum = 0;
// let result = 1;
// let count = 0;

// while (num > 0) {
//     let digit = num % 10;
//     num = Math.trunc(num / 10);
//     sum += digit;
//     result *= digit;
//     count++;
// }
// console.log(sum);
// console.log(result);
// console.log(sum / count);

//#endregion


// 6. Verilmiş ədədin bütün bölənlərini tapan proqram tərtib edin.

//#region
// let num = prompt("enter the number");

// for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//         console.log(i);
//     }
// }
//#endregion

// 7. Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.


// #region
// let num = prompt("enter the number");
// let count = 0;
// for (let i = 0; i <= num; i++) {
//     if (num % i == 0) {
//         count++;
//     }
// }
// console.log(count);
//#endregion



// 8. Verilmiş array-in tək elementlərinin indeksini çapa verən proqram tərtib edin.

// #region

// let arr = [3, 8, 2, 5, 4, 10, 7, 6];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 1) {
//         console.log(arr[i]);
//     }
// }
//#endregion


// 9. Verilmiş array-in tək indeksli elementlərini çapa verən proqram tərtib edin.

// #region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 1) {
//         console.log(arr[i]);
//     }
// }
// #endregion


// 10. Verilmiş array-in max elementini çapa verən proqram tərtib edin.

// #region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (max < arr[i]) {
//         max = arr[i];
//     }
// }
// console.log(max);
//#endregion


// 11. Verilmiş array-in cüt elementlərinin max elementini çapa verən proqram tərtib edin.


//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let max = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 == 0) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
// }
// console.log(max);
// #endregion


// 12. Verilmiş array-in min elementinin indeksini çapa verən proqram tərtib edin.

//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//     }
// }
// console.log(arr.indexOf(min));
// #endregion


// 13. Verilmiş array-in min elementi ilə max elementinin yerini dəyişən proqram tərtib edin

//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// let max = arr[0];
// let maxIndex;
// let minIndex;
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//         minIndex = i;
//     }
//     if (max < arr[i]) {
//         max = arr[i];
//         maxIndex = i;
//     }
// }

// let temp = arr[minIndex];
// arr[minIndex] = arr[maxIndex];
// arr[maxIndex] = temp;
// console.log(arr);


//#endregion


// 14. Verilmiş array-in  cüt elementlərinin min elementi ilə tək elementlərinin max elementinin yerini dəyişən proqram tərtib edin


//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// let max = arr[0];
// let maxIndex;
// let minIndex;
// for (let i = 0; i < arr.length; i++) {
//     if (i % 2 == 0) {
//         if (min > arr[i]) {
//             min = arr[i];
//             minIndex = i;
//         }
//     }
//     else {
//         if (max < arr[i]) {
//             max = arr[i];
//             maxIndex = i;
//         }
//     }
// }

// let temp = arr[minIndex];
// arr[minIndex] = arr[maxIndex];
// arr[maxIndex] = temp;
// console.log(arr);
//#endregion


// 15. Daxil olunan ədədin array-də olub olmadığını təyin edən proqram tərtib edin.

//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let num = Number(prompt("enter the number"));

// console.log(arr.includes(num));
//#endregion


// 16. Verilmiş array-də min və max elementi nəzərə almadan yerdə qalan bütün elementlərin cəmini tapın.


//#region
// let arr = [3, 8, 2, 5, 4, 10, 7, 6];
// let min = arr[0];
// let max = arr[0];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (min > arr[i]) {
//         min = arr[i];
//         minIndex = i;
//     }
//     if (max < arr[i]) {
//         max = arr[i];
//         maxIndex = i;
//     }
//     sum += arr[i];
// }
// sum -= min + max;
// console.log(sum);
//#endregion


// 17. Verilmiş arrayin bool tipinde olan elementin qonsu elementlerini ekrana cixaran proqram yazin


//#region
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == true || arr[i] == false) {
//         console.log(arr[i + 1]);
//     }
// }
//#endregion




// 18. Verilmiş array -in ən uzun sözünü ekrana çıxaran proqram yazın


//#region
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let maxLength = arr[0];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > maxLength) {
//         maxLength = arr[i]
//     }
// }
// console.log(maxLength);
//#endregion


// 19. Verilmiş array-in bütün hərfləri böyük olan sözün özünü və indeksini çapa çıxaran proqram yazın.


//#region
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];
// let index;

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         let upperCase = arr[i].toUpperCase();
//         if (upperCase === arr[i]) {
//             index = i;
//             console.log(upperCase);
//         }
//     }
// }
// console.log(index);
//#endregion


// 20. Verilmiş array-in 2-dən artıq böyük hərfi olan elementlərini çapa çıxaran proqram yazın


//#region
// let arr = [2, 9, -5, -4, "AzerBayCan", true, 12, "LANKARAN", "LimOn", 182, 4];

// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string") {
//         let upperCase = 0;
//         for (let j = 0; j < arr.length; j++) {
//             if (arr[i][j] >= "A" && arr[i][j] <= "Z") {
//                 upperCase++;
//             }
//         }
//         if (upperCase >= 2) {
//             console.log(arr[i]);
//         }
//     }
// }
//#endregion