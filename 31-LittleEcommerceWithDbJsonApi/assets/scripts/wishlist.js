let tBody = document.querySelector("tbody");

let singers_url = "http://localhost:3000/singers";
axios.get(singers_url).then((res) => {
  let data = res.data;

  data.forEach((singer) => {
    let favArr;
    let localFav = JSON.parse(localStorage.getItem("fav"));
    if (localFav) {
      favArr = [...localFav];
    } else {
      favArr = [];
    }
    favArr.forEach((id) => {
      if (singer.id == id) {
        tBody.innerHTML += `
                <tr>
                    <td scope="row">${singer.id}</td>
                    <td>${singer.name}</td>
                    <td> <img src="${singer.image}" alt="" style="width:60px;height:60px"></td>
                    <td>${singer.age}</td>
                    <td>${singer.genre}</td>
                    <td><button name=${singer.id} class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button></td>
                </tr>`;
      }
      let deleteBtns = document.querySelectorAll(".delete");
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              let updatedFav = favArr.filter((x) => x != this.name);
              this.closest("tr").remove();
              localStorage.setItem("fav", JSON.stringify([...updatedFav]));
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });
});

let mealsTable = document.querySelector(".meals");
let meals_url = "http://localhost:3000/meals";


axios.get(meals_url).then((res) => {
  let data = res.data;
  let mealFavArr;
  let localMealFav = JSON.parse(localStorage.getItem("meal-fav"));
  if (localMealFav) {
    mealFavArr = [...localMealFav];
  } else {
    mealFavArr = [];
  }

  data.forEach((food) => {
    mealFavArr.forEach((item) => {
      if (food.id == item) {
        mealsTable.innerHTML += `
                <tr>
                    <td scope="row">${food.id}</td>
                    <td>${food.name}</td>
                    <td> <img src="${food.image}" alt="" style="width:60px;height:60px"></td>
                    <td>${food.price}</td>
                    <td><button name=${food.id} class="btn btn-outline-danger deleteMeal"><i class="fa-solid fa-trash"></i></button></td>
                    <td><button name=${food.id}  class="btn btn-outline-danger addBasket"><i class="fa-solid fa-basket-shopping"></i></button></td>
                </tr>`;
      }

      // add local basket
      let basketArr;
      let localBasket = JSON.parse(localStorage.getItem("basket"));
      if (localBasket) {
        basketArr = [...localBasket];
      } else {
        basketArr = [];
      }

      let addBaskets = document.querySelectorAll(".addBasket");
      addBaskets.forEach((addBasket) => {
        addBasket.addEventListener("click", function () {
          let existingMeal = basketArr.find((item) => item.userId === this.name);
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
        })
      })

      // delete item
      let deleteBtns = document.querySelectorAll(".deleteMeal");
      deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", function () {
          Swal.fire({
            title: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
          }).then((result) => {
            if (result.isConfirmed) {
              let updatedMealFav = mealFavArr.filter((x) => x != this.name);
              this.closest("tr").remove();
              localStorage.setItem("meal-fav", JSON.stringify([...updatedMealFav]));
              Swal.fire("Deleted!", "success");
            }
          });
        });
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

let localFav = JSON.parse(localStorage.getItem("fav"));
if (localFav) {
  favArr = [...localFav];
} else {
  favArr = [];
}

let localMealFav = JSON.parse(localStorage.getItem("meal-fav"));
if (localMealFav) {
  mealFavArr = [...localMealFav];
} else {
  mealFavArr = [];
}

let countSingerWish = favArr.length;
let countMealWish = mealFavArr.length;
let countWish = countSingerWish + countMealWish;
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