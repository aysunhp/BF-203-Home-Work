// 1. Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

//#region
// const numberArr = [2, 4, 6, 8, 3, 5, 7, 9, 10, 11, 12, 13, 14];

// let powOfNum = numberArr.map((elem) => Math.pow(elem, 2));

// console.log(powOfNum);
//#endregion



// 2. Array-in müsbət elementlərinin cəmini tapan funksiya yazın. Əgər array-in bütün elementləri mənfidirsə geriyə 0 qaytarsın.

//#region
// const numberArr = [2, -4, 6, -8, 3, -5, 7, -9, 10, 11, 12, -13, 14, 0];

// function sumOfPositive(numberArr) {
//     let sum = 0;
//     numberArr.forEach(elem => {
//         if (elem > 0) {
//             sum += elem;
//         } else {
//             return 0;
//         }
//     }
//     )
//     console.log(sum);
// }
// sumOfPositive(numberArr);
//#endregion


// 3. Array-in median və ədədi ortasını obyekt tərkibində return edən funksiya yazın. Median- ən kiçik element ilə ən böyük elementin ədədi ortasıdır

//#region
// const numberArr = [2, -4, 6, -8, 3, -5, 7, -9, 10, 11, 12, -13, 14, 0];
// function getAvg(numberArr) {
//     let sum = 0;
//     numberArr.forEach((elem) => (sum += elem));
//     return (sum / numberArr.length);
// }

// function getMedian(numberArr) {
//     let max = Math.max(...numberArr);
//     let min = Math.min(...numberArr);
//     let median = (max + min) / 2;
//     return median;
// }

// console.log(getAvg(numberArr));
// console.log(getMedian(numberArr));
//#endregion


// 4. Hər hansı bir cümlədə istənilən  böyük hərflə olan simvolları birləşdirib qaytaran funksiya yazın.

//#region

function upper(sentences) {
    let words = sentences.split(' ');
    let upperWords = words.forEa((word) => {
        {
            if (word.slice(0, 1) >= "A" && word.slice(0, 1) <= "Z") {
                return word.slice(0, 1);
            }
        }
    });

    return upperWords.join(" ");

}

console.log(upper("Hər Hansı Bir cumlədə istənilən  Böyük hərflə olan Simvolları birləşdirib Qaytaran Funksiya azın."))

//#endregion

// 5. Cümlədə olan bütün sözləri ixtisar edən proqram tərtib edin. Əgər söz 4 hərfdən azdırsa o qısaldılmır. İxtisar zamanı başdakı və sondakı hərflər saxlanılır, ortada olan hərflərin sayı yazılır. Cümlədə heç bir durğu işarəsi olmayacaq. Məsələn qurban-q4n, stəkan-s4n, javascript-j8t

//#region
// function abbrationSentence(sentence) {

//     let words = sentence.split(' ');

//     let abbredWord = words.map(word => {
//         if (word.length < 4) {
//             return word;
//         } else {
//             return word[0] + (word.length - 2) + word[word.length - 1];
//         }
//     })
//     return abbredWord.join(' ')
// }
// console.log(abbrationSentence("this is javascript exercise"));

//#endregion




