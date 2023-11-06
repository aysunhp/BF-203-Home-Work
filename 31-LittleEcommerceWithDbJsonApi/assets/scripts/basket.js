let tBody = document.querySelector("tbody");
let removeAll = document.querySelector(".remove-all");
let order = document.querySelector(".order");
let basketTotal = document.querySelector(".basket-total");

let basketArr;
if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = [];
}


let meals_url = "http://localhost:3000/meals";
axios.get(meals_url).then((res) => {
  let data = res.data;

  data.forEach((food) => {
    basketArr.forEach((item) => {
      if (food.id == item.userId) {
        tBody.innerHTML += `
                  <tr>
                      <td scope="row">${food.id}</td>
                      <td>${food.name}</td>
                      <td> <img src="${food.image}" alt="" style="width:60px;height:60px"></td>
                      <td>${food.price}</td>
                      <td>${item.quantity}</td>
                      <td class="food-quantity">${food.price * item.quantity}</td>
                      <td><button name=${food.id} class="btn btn-success increase">+</td>
                      <td><button name=${food.id} class="btn btn-danger decrease">-</td>
                      <td><button name=${food.id} class="btn btn-outline-danger delete"><i class="fa-solid fa-trash"></i></button></td>
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
              let updatedBasket = basketArr.filter((x) => x.userId != this.name);
              this.closest("tr").remove();
              localStorage.setItem(
                "basket",
                JSON.stringify([...updatedBasket])
              );

              let basket_total = document.querySelector('.basket-total');
              // let removed = data.find(meal => meal.id == item.userId);
              // removedQuantity = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
              // totalPrice = totalPrice - Math.round(removed.price * removedQuantity);

              basket_total.textContent = totalPrice;
              Swal.fire("Deleted!", "success");
            }
          });
        });
      });
    });
  });

  // increase btn
  let increaseBtns = document.querySelectorAll(".increase");
  increaseBtns.forEach(increaseBtn => {
    increaseBtn.addEventListener("click", function () {
      let mealId = this.name;
      let mealPrice = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let existingMeal = basketArr.find((item) => item.userId === mealId);
      let foodTotalPrice = this.parentElement.previousElementSibling;
      if (existingMeal) {
        existingMeal.quantity += 1;
        let quantityTd = this.parentElement.previousElementSibling.previousElementSibling;
        quantityTd.textContent = existingMeal.quantity;
        foodTotalPrice.textContent = existingMeal.quantity * mealPrice;

      }
      localStorage.setItem("basket", JSON.stringify(basketArr));

      let basket_total = document.querySelector('.basket-total');

      totalPrice = Math.round(basketArr.reduce((total, item) => {
        let addedMeal = data.find(meal => meal.id == item.userId);
        return total + addedMeal.price * item.quantity;
      }, 0));
      basket_total.textContent = totalPrice;
    }
    )
  })

  // decrease btn
  let decreaseBtns = document.querySelectorAll(".decrease");
  decreaseBtns.forEach(decreaseBtn => {
    decreaseBtn.addEventListener("click", function () {
      let mealId = this.name;
      let mealPrice = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.innerText;
      let existingMeal = basketArr.find((item) => item.userId === mealId);
      let foodTotalPrice = this.parentElement.previousElementSibling.previousElementSibling;
      if (existingMeal.quantity > 1) {
        existingMeal.quantity -= 1;
        console.log(existingMeal.quantity)
        let quantityTd = this.parentElement.previousElementSibling.previousElementSibling.previousElementSibling;
        quantityTd.textContent = existingMeal.quantity;
        foodTotalPrice.textContent = existingMeal.quantity * mealPrice;
      }

      localStorage.setItem("basket", JSON.stringify(basketArr));
      let basket_total = document.querySelector('.basket-total');

      totalPrice = Math.round(basketArr.reduce((total, item) => {
        let addedMeal = data.find(meal => meal.id == item.userId);
        return total + addedMeal.price * item.quantity;
      }, 0));
      basket_total.textContent = totalPrice;
    }
    )
  })



  // total price of basket
  totalPrice = Math.round(basketArr.reduce((total, item) => {
    let addedMeal = data.find(meal => meal.id == item.userId);
    return total + addedMeal.price * item.quantity;
  }, 0));
  basketTotal.innerText = totalPrice;
});

// removing all
removeAll.addEventListener("click", function () {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      tBody.innerHTML = "";
      basketTotal.innerText = "0";
      tBody.innerHTML = `   <h1 class="text-danger m-5">No basket</h1>`;
      localStorage.removeItem("basket");
      Swal.fire("Deleted!", "success");
    }
  });
});



// count of basket and fav items
if (JSON.parse(localStorage.getItem("basket"))) {
  basketArr = JSON.parse(localStorage.getItem("basket"));
} else {
  basketArr = [];
}
let favArr;
let localFav = JSON.parse(localStorage.getItem("fav"));
if (localFav) {
  favArr = [...localFav];
} else {
  favArr = [];
}
let countWish = favArr.length;
let countBasket = basketArr.reduce((total, item) => {
  return total + item.quantity;
}, 0);
let wishlistCount = document.querySelector("#wishlist-count");
let basketCount = document.querySelector("#basket-count");

document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();
  wishlistCount.innerText = `${countWish}`;
  basketCount.innerText = `${countBasket}`;
});


// ordering
order.addEventListener("click", function () {
  let localUser = JSON.parse(localStorage.getItem("users"));
  if (localUser) {
    axios.get("http://localhost:3000/users").then(res => {
      let users = res.data;
      userArr = localUser;
      userArr.forEach(elem => {
        let user = users.find(item => item.id == elem.userId);
        console.log(user);
        // balance
        if (user.balance < totalPrice) {
          Swal.fire({
            position: 'bottom-end',
            icon: 'error',
            title: 'Your balance is not enough',
            showConfirmButton: false,
            timer: 1500
          })
        } else {
          let newBalance = user.balance - totalPrice;
          axios.patch(` http://localhost:3000/users/${user.id}`, { balance: newBalance })

          if (!user.order) {
            user.order = [];
          }
          // order.push(obj);
          axios.patch(`http://localhost:3000/users/${user.id}`, {
            order: [...user.order, {
              totalPrice: basketTotal.innerText,
              orderDate: new Date(),
              id: Math.random().toString(16).slice(2),
            }]
          })
          basketTotal.innerText = 0;
          tBody.innerHTML = "";
          tBody.innerHTML = `<h2 class="text-danger m-3">No basket</h2>`;
          localStorage.removeItem("basket");


          Swal.fire({
            position: 'bottom-end',
            icon: 'success',
            title: 'Your basket sended to check',
            showConfirmButton: false,
            timer: 1500
          })
        }
      })
    })

  }
  else {
    Swal.fire({
      icon: "error",
      title: "You have to login first!",
      footer: '<a href="login.html">Login now</a>',
    });
  }
});


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