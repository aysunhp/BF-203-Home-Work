let cards = document.querySelector(".cards");
let url_meals = "http://localhost:3000/meals";

axios.get(url_meals).then((res) => {
  let data = res.data;

  data.forEach((food) => {
    cards.innerHTML += `
    <div class="card" style="width: 18rem;owerflow:hidden">
    <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
    <img
    style="height:200px;overflow: hidden;"
      src="${food.image}"
      class="card-img-top"
      alt="..."
    />
    </div>
    <div class="card-body" style="width:100%">
      <h5 class="card-title">${food.name}</h5>
      <p class="card-text">${food.name} is $${food.price}</p>
      <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
      <a href="" class="btn btn-outline-danger delete"
        ><i class="fa-solid fa-trash"></i
      ></a>
      <a href="" name=${food.id} class="btn btn-outline-primary basket"
        ><i class="fa-solid fa-basket-shopping"></i
      ></a>
      <a href="" name=${food.id} class="btn btn-outline-danger favMeals"
      ><i class="fa-regular fa-heart"></i
    ></a>
    </div>`;
  });

  // att to basket
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

  // adding fav
  let mealFavArr;
  let localMealFav = JSON.parse(localStorage.getItem("meal-fav"));
  if (localMealFav) {
    mealFavArr = [...localMealFav];
  } else {
    mealFavArr = [];
  }
  console.log(mealFavArr);

  let favs = document.querySelectorAll(".favMeals");
  favs.forEach((fav) => {
    fav.addEventListener("click", function (e) {
      e.preventDefault();
      let mealId = this.getAttribute("name");
      console.log(mealId)
      if (mealFavArr) {
        if (mealFavArr.includes(mealId)) {
          mealFavArr = mealFavArr.filter((name) => name !== mealId);
          localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
          this.children[0].classList.replace("fa-solid", "fa-regular");
          Swal.fire({
            position: "bottom-right",
            icon: "error",
            title: "Meal removed from favourites",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          mealFavArr.push(mealId);
          localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
          this.children[0].classList.replace("fa-regular", "fa-solid");

          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: "Meal added to favourites!",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        mealFavArr = [];
      }
    });
  });

  // scale of image
  let images = document.querySelectorAll(".card-img-top");
  images.forEach((image) => {
    image.addEventListener("mousemove", function () {
      image.style.transform = "scale(1.15)";
      image.style.transition = "transform 0.25s";
    });

    image.addEventListener("mouseout", function () {
      image.style.transform = "scale(1)";
      image.style.transition = "transform 0.25s";
    });
  });


});


// search input
let mealsInput = document.querySelector(".meals-input");
mealsInput.addEventListener("keyup", function () {
  axios.get(url_meals).then((res) => {
    let data = res.data;
    cards.innerHTML = "";
    data.forEach((food) => {
      if (food.name.toLowerCase().includes(mealsInput.value.toLowerCase())) {
        cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
    <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
    <img
    style="height:200px;overflow: hidden;"
      src="${food.image}"
      class="card-img-top"
      alt="..."
    />
    </div>
    <div class="card-body" style="width:100%">
      <h5 class="card-title">${food.name}</h5>
      <p class="card-text">${food.name} is $${food.price}</p>
      <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
      <a href="" class="btn btn-outline-danger delete"
        ><i class="fa-solid fa-trash"></i
      ></a>
      <a href="" name="${food.id}" class="btn btn-outline-primary basket"
        ><i class="fa-solid fa-basket-shopping"></i
      ></a>
      <a href="" name="${food.id}"  class="btn btn-outline-danger favMeals"
      ><i class="fa-regular fa-heart"></i
    ></a>
    </div>`;
      }
      // att to basket
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

      // adding fav
      let mealFavArr;
      let localMealFav = JSON.parse(localStorage.getItem("meal-fav"));
      if (localMealFav) {
        mealFavArr = [...localMealFav];
      } else {
        mealFavArr = [];
      }
      console.log(mealFavArr);

      let favs = document.querySelectorAll(".favMeals");
      favs.forEach((fav) => {
        fav.addEventListener("click", function (e) {
          e.preventDefault();
          let mealId = this.getAttribute("name");

          if (mealFavArr) {
            if (mealFavArr.includes(mealId)) {
              mealFavArr = mealFavArr.filter((name) => name !== mealId);
              localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
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
              localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
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
            mealFavArr = [];
          }
        });
      });

    });
  });
});

// sort by price
let sortByPriceBtn = document.querySelector(".sort-by-price-btn")
sortByPriceBtn.addEventListener("click", function () {
  axios.get(url_meals).then((res) => {
    let data = res.data;
    let sortedData = data.sort((a, b) => a.price - b.price);
    cards.innerHTML = "";
    sortedData.forEach((food) => {
      cards.innerHTML += `
      <div class="card" style="width: 18rem;owerflow:hidden">
      <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
      <img
      style="height:200px;overflow: hidden;"
        src="${food.image}"
        class="card-img-top"
        alt="..."
      />
      </div>
      <div class="card-body" style="width:100%">
        <h5 class="card-title">${food.name}</h5>
        <p class="card-text">${food.name} is $${food.price}</p>
        <a href="detail-food.html?foodId=${food.id}" class="btn btn-outline-primary details">Details</a>
        <a href="" class="btn btn-outline-danger delete"
          ><i class="fa-solid fa-trash"></i
        ></a>
        <a href="" name="${food.id}" class="btn btn-outline-primary basket"
          ><i class="fa-solid fa-basket-shopping"></i
        ></a>
        <a href="" name="${food.id}"  class="btn btn-outline-danger favMeals"
        ><i class="fa-regular fa-heart"></i
      ></a>
      </div>`
        ;
    });
    // att to basket
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

    // adding fav
    let mealFavArr;
    let localMealFav = JSON.parse(localStorage.getItem("meal-fav"));
    if (localMealFav) {
      mealFavArr = [...localMealFav];
    } else {
      mealFavArr = [];
    }
    console.log(mealFavArr);

    let favs = document.querySelectorAll(".favMeals");
    favs.forEach((fav) => {
      fav.addEventListener("click", function (e) {
        e.preventDefault();
        let mealId = this.getAttribute("name");
        if (mealFavArr) {
          if (mealFavArr.includes(mealId)) {
            mealFavArr = mealFavArr.filter((name) => name !== this.name);
            localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
            this.children[0].classList.replace("fa-solid", "fa-regular");
            Swal.fire({
              position: "bottom-right",
              icon: "error",
              title: "Meal removed from favourites",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {

            mealFavArr.push(mealId);
            localStorage.setItem("meal-fav", JSON.stringify(mealFavArr));
            this.children[0].classList.replace("fa-regular", "fa-solid");
            Swal.fire({
              position: "bottom-right",
              icon: "success",
              title: "Meal added to favourites!",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          mealFavArr = [];
        }
      });
    });

  });
});

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