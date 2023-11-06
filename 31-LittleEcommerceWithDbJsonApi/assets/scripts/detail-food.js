let container = document.querySelector(".container");

let id = new URLSearchParams(location.search).get("foodId")
console.log(id);

let meals_url = "http://localhost:3000/meals"
axios.get(meals_url).then((res) => {
    let data = res.data;
    console.log(data);

    let found = data.find((item) => item.id == id);
    console.log(found);

    container.innerHTML = `
<div class="card" style="width: 50%">
<div class="image-wrapper" style="width: 100%; overflow: hidden;">
<img
style="overflow: hidden;"
  src="${found.image}"
  class="card-img-top"
  alt="${found.name}"
/>
</div>
    <div class="card-body" style="width:100%;padding:30px">
      <h5 class="card-title">${found.name}</h5>
      <p class="card-text">PRICE $${found.price}</p>
      <p class="card-text">Ingredients: ${found.ingredients}</p>
      <a href="meals.html" class="btn btn-outline-primary details">Home</a>
      <a href="" name="${found.id}"  class="btn btn-outline-primary basket"
      ><i class="fa-solid fa-basket-shopping"></i
    ></a>
    <a href="" name="${found.id}" id=${found.name} class="btn btn-outline-danger favMeals"
    ><i class="fa-regular fa-heart"></i
  ></a>
    </div>
</div>`;


    // add to fav
    let favArr;
    let localFav = JSON.parse(localStorage.getItem("fav"));
    if (localFav) {
        favArr = [...localFav];
    } else {
        favArr = [];
    }
    console.log(favArr);

    let favs = document.querySelectorAll(".favMeals");
    favs.forEach(fav => {
        fav.addEventListener("click", function (e) {
            e.preventDefault();
            let mealId = this.getAttribute("id");
            if (favArr) {
                if (favArr.includes(mealId)) {
                    favArr = favArr.filter((name) => name !== mealId);
                    localStorage.setItem("fav", JSON.stringify(favArr));
                    this.children[0].classList.replace("fa-solid", "fa-regular");
                    Swal.fire({
                        position: "bottom-right",
                        icon: "error",
                        title: "Meal removed from favourites",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    favArr.push(mealId);
                    localStorage.setItem("fav", JSON.stringify(favArr));
                    this.children[0].classList.replace("fa-regular", "fa-solid");
                    Swal.fire({
                        position: "bottom-right",
                        icon: "success",
                        title: "Meal added to favourites",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                favArr = [];
            }
        })
    })
    // adding basket
    let basketArr;
    let localBasket = JSON.parse(localStorage.getItem("basket"));
    if (localBasket) {
        basketArr = [...localBasket];
    } else {
        basketArr = [];
    }


    let baskets = document.querySelectorAll(".basket");
    baskets.forEach((basket) => {
        basket.addEventListener("click", function (e) {
            e.preventDefault();
            let mealId = this.name;
            let existingMeal = basketArr.find((item) => item.userId === mealId);
            if (basketArr) {
                if (!existingMeal) {
                    let obj = {};
                    obj.quantity = 1;
                    obj.userId = this.name;
                    basketArr.push(obj);
                    localStorage.setItem("basket", JSON.stringify(basketArr));
                    Swal.fire({
                        position: "bottom-right",
                        icon: "success",
                        title: " Added to Basket",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                } else {
                    existingMeal.quantity += 1;
                    localStorage.setItem("basket", JSON.stringify(basketArr));
                    Swal.fire({
                        position: "bottom-right",
                        icon: "success",
                        title: "One more added",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } else {
                basketArr = [];
            }
        });
    });


    // scale of image
    let image = document.querySelector(".card-img-top");
    console.log(image);

    image.addEventListener("mouseover", function () {
        image.style.transform = "scale(1.15)";
        image.style.transition = 'transform 0.25s';
    })
    image.addEventListener("mouseout", function () {
        image.style.transform = "scale(1)";
        image.style.transition = 'transform 0.25s';
    })
})

let basketArr;
if (JSON.parse(localStorage.getItem("basket"))) {
    basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
    basketArr = []
}
let favArr;
let localFav = JSON.parse(localStorage.getItem("fav"));
if (localFav) {
    favArr = [...localFav];
} else {
    favArr = [];
}
console.log(favArr);

console.log(favArr);
console.log(basketArr)
console.log(favArr.length);
let countWish = favArr.length;
let countBasket = basketArr.reduce((total, item) => {
    return total + item.quantity;
}, 0);
let wishlistCount = document.querySelector("#wishlist-count");
let basketCount = document.querySelector("#basket-count");

document.addEventListener('DOMContentLoaded', function (e) {
    e.preventDefault();
    wishlistCount.innerText = `${countWish}`;
    basketCount.innerText = `${countBasket}`;

})

// profile and logOut
let profile = document.querySelector(".profile");
let logOut = document.querySelector(".log-out");
let login = document.querySelector(".login");
let register = document.querySelector(".register");

let userArr;
let localUser = JSON.parse(localStorage.getItem("users"));
if (localUser) {
    userArr = [...localUser];
} else {
    userArr = [];
}


if (localUser) {
    profile.classList.replace("d-none", "d-block");
    logOut.classList.replace("d-none", "d-block");
    register.classList.add("d-none");
    login.classList.add("d-none");
    logOut.addEventListener("click", function (e) {
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Log out!'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("users");
                Swal.fire(
                    'Logged out!',
                    'success'
                )
                document.location.href = "index.html"
            }
        })

    })
}