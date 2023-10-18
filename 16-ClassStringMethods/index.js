// 1. Verilmiş string-dəki bütün _ (underscore-ları) -(dash) ilə əvəz edin.

//#region 
// let str = "Apple_Banana_Kiwi_Orange";
// console.log(str.replaceAll("_", "-"));

//#endregion



// 2. Bir function yazın. parametr olaraq bir string qəbul edir və həmin string-in bütün simvollarını kiçik hərflərlə əvəz edib return edin. (Arrow function yazmalısınız)

//#region
// let str = "heLLO, WoRld";
// myfunc = (str) => str.toLowerCase()

// console.log(myfunc(str));

//#endregion



// 3. Bir function yazın. parametr olaraq bir string qəbul edir. Function-ın içərisində string-in əvvəl və sonundakı boşluq-ları silməli və geri qalan bütün simvolları bir array element-i kimi array-ə çevirib onu return etməlisiniz. Məsələn ("  hey  ") input olaraq daxil olunsa output =>['h','e','y'] olmalıdır. (Anonym function yazmalısınız)

//#region
// let str = "  HELLO, WORLD   ";
// myfunc = (str) => str.trim().split("")

// console.log(myfunc(str));

//#endregion



// 4. Bir function yazın. ("Robin Singh from USA")) input olaraq belə bir string qəbul edərsə, output-a "robin-singh-from-usa" string-ini verməlidir. Arrow function yazmalısınız.

//#region

// let str = "Robin Singh from USA";
// myfunc = (str) => str.replaceAll(" ", "-").toLowerCase();

// console.log(myfunc(str));

//#endregion



// 5. Bir function yazın, input olaraq ('js string exercises') qəbul edərsə output-da "Js string exercises" string-ini qaytarmalıdır. Capitalize etməlidir. Regular function yazmalısınız.

//#region

// let str = "js string exercises";
// myfunc = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// console.log(myfunc(str));

//#endregion



// 6. Daxil edilmiş string-dəki böyük hərflərin sayını return edən bir anonym function yazın.

//#region 

// let str = "JS String ExerciseS";
// let count = 0;
// let countOfUpperLeters = function (str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] == str[i].toUpperCase() && str[i].trim() != "") {
//             count++;
//         }
//     }
//     return count;
// };
// console.log(countOfUpperLeters(str));

//#endregion



// 7. Bir function yazın, parametr olaraq bir söz və bir cümlə qəbul edir. Əgər həmin söz cümlədə tapılarsa bir object return edir. Object-də isFound və index dəyərləri olur. Əgər tapılarsa həmin söz isFound true, index isə həmin sözün indeksi olur. Əgər tapılmasa isə isFound false, index isə -1 olmalıdır.

//#region

// let str = "JS String Exercises";
// let word = "akam";

// function myfunc(word, str) {
//     for (let i = 0; i < str.length; i++) {
//         if (str.includes(word)) {
//             let objT = {
//                 index: str.indexOf(word),
//                 isFound: true,
//             };
//             return objT;
//         } else {
//             let objF = {
//                 index: str.indexOf(word),
//                 isFound: false,
//             };
//             return objF;
//         }
//     }
// }
// console.log(myfunc(word, str));

//#endregion



// 8. Bir Human Function Constructor yaradırsınız. Human-ın name, surname, birthYear, birthCity propert-ləri və getFullName adında bir metodu var, hansı ki fullname-ini qaytarmalıdır (name və surname-i). Bu function constructor-dan istifadə edib 4-5 human yaradın və bir people array-i yaradıb ora yığın. Daha sonra searchHuman adında bir function yazın və bu function sizdən bir search string-i və bir dənə isə haradan axtaracağı array-i qəbul edir. search string-inin dəyərini prompt-dan götürəcəksiniz. Search fullname-ə görə olmalıdır. Yəni mən yalnız name-i yazıb və ya yalnız surname-i yazıb axtarsan ona uyğun data-larımı qaytarmalıdır function. Eyni zaman-da həm name həm də surname-i yazıb axtarsam yenə tapıb qaytarmalıdır. searchByFullName function-ı yaratmalısınız və geriyə kimləri tapdısa, həmin human object-lərini bir array-ə yığıb onu return etməlisiniz.

// #region
function Human(name, surname, birthYear, birthCity) {

    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.birthCity = birthCity;
    this.getFullName = function () {
        return this.name + " " + this.surname;
    };
}

let human1 = new Human("Julian", "Joyce", 2004, "Rome");
let human2 = new Human("Nevaeh", "Simmons", 2002, "New York");
let human3 = new Human("Dawid", "Houston", 2001, "Istanbul");
let human4 = new Human("Sufyaan ", "Bridges", 2002, "Baku");
let human5 = new Human("Aysha", "Schultz", 2005, "France");

let people = [];
people.push(human1, human2, human3, human4, human5);

let input = prompt("search for human: ");

function searchHuman(search, arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        let fullName = arr[i].getFullName();
        if (
            arr[i].name.toLowerCase().trim().includes(search.toLowerCase().trim()) ||
            arr[i].surname
                .toLowerCase()
                .trim()
                .includes(search.toLowerCase().trim()) ||
            fullName.toLowerCase().trim().includes(search.toLowerCase().trim())
        ) {
            result.push(arr[i]);
        }
    }
    if (result.length) {
        return result;
    } else {
        return alert(`not found ${search}`);
    }
}

let resultArr = searchHuman(input, people);
console.log(resultArr);

//#endregion