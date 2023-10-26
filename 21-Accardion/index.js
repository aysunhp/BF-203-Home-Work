let openButtons = document.querySelectorAll(" .open-btn");
let accItem = document.querySelectorAll(".accardion-container");
// let accTitle = document.querySelectorAll(".accardion-title");
// let accContent = document.querySelectorAll(".accardion-content");
// let container = document.querySelector(".container");


// console.log(openButtons);

openButtons.forEach((button) => {
    let nextSibling = button.parentElement.nextElementSibling;
    button.addEventListener("click", function () {
        if (nextSibling.style.display === "block") {
            nextSibling.style.display = "none"
            button.innerHTML = `<button><i class="fa-solid fa-chevron-down"></i></button>`
            nextSibling.parentElement.style.backgroundImage = "none";
        } else {
            nextSibling.style.display = "block";
            button.innerHTML = `<button><i class="fa-solid fa-circle-xmark"></i></button>`;
            nextSibling.parentElement.style.backgroundImage = "url(https://img.freepik.com/free-photo/abstract-background-light-steel-blue-wallpaper-image_53876-102530.jpg?w=996&t=st=1698310700~exp=1698311300~hmac=4d024b64b1e3587465cb40e7f24d472022514a8a398c7fcc4f7ef30f65c48157)";
            nextSibling.parentElement.style.backgroundSize = "cover"
            nextSibling.parentElement.style.backgroundRepeat = "no-repeat"
        }

    })
});


// for (let i = 0; i < openButtons.length; i++) {
//     let button = openButtons[i];
//     let nextSibling = button.parentElement.nextElementSibling;
//     console.log(nextSibling);
//     button.addEventListener("click", function () {
//         if (nextSibling.style.display === "block") {
//             nextSibling.style.display = "none"
//         } else {
//             nextSibling.style.display = "block"
//         }
//     })
// }    