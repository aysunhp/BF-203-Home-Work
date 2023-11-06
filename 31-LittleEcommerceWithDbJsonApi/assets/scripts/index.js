let cards = document.querySelector(".cards");
let singerInput = document.querySelector(".singer-input");
let sortByNameBtn = document.querySelector(".sort-by-name-btn");

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

    cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            >  <i class= "fa-regular fa-heart"></i></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
  });
  //  adding to fav


  let favs = document.querySelectorAll(".fav");
  favs.forEach((fav) => {
    fav.addEventListener("click", function (e) {
      e.preventDefault();
      let singerId = this.getAttribute("name");

      if (favArr) {
        if (favArr.includes(singerId)) {
          favArr = favArr.filter((id) => id !== singerId);
          this.children[0].classList.replace("fa-solid", "fa-regular");
          Swal.fire({
            position: "bottom-right",
            icon: "error",
            title: "Singer  removed from favourites!",
            showConfirmButton: false,
            timer: 1500,
          });
        } else {
          favArr.push(singerId);
          this.children[0].classList.replace("fa-regular", "fa-solid");
          Swal.fire({
            position: "bottom-right",
            icon: "success",
            title: "Singer added  to favourites",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      } else {
        favArr = [];
      }
      localStorage.setItem("fav", JSON.stringify(favArr));
      axios.get("http://localhost:3000/singers").then((res) =>

        favArr.forEach(fav => {
          if (fav == res.data.id) {
            this.children[0].classList.replace("fa-regular", "fa-solid");
          }
        }))

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
singerInput.addEventListener("keyup", function () {
  axios.get(singers_url).then((res) => {
    let data = res.data;
    cards.innerHTML = "";
    data.forEach((singer) => {
      if (singer.name.toLowerCase().includes(singerInput.value.toLowerCase())) {
        cards.innerHTML += `
        <div class="card" style="width: 18rem;owerflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            ><i class="fa-regular fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
      }
      //  adding to fav
      let favArr;
      let localFav = JSON.parse(localStorage.getItem("fav"));
      if (localFav) {
        favArr = [...localFav];
      } else {
        favArr = [];
      }
      let favs = document.querySelectorAll(".fav");
      let icons = favs.children[0]
      console.log("salam");
      JSON.parse(localStorage.getItem("fav"))



      favs.forEach((fav) => {
        fav.addEventListener("click", function (e) {
          e.preventDefault();
          let singerId = this.getAttribute("name");

          if (favArr) {
            if (favArr.includes(singerId)) {
              favArr = favArr.filter((id) => id !== singerId);
              this.children[0].classList.replace("fa-solid", "fa-regular");
              Swal.fire({
                position: "bottom-right",
                icon: "error",
                title: "Singer removed from favourites",
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              favArr.push(singerId);
              this.children[0].classList.replace("fa-regular", "fa-solid");
              Swal.fire({
                position: "bottom-right",
                icon: "success",
                title: "Singer added to favourites",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } else {
            favArr = [];
          }

          localStorage.setItem("fav", JSON.stringify(favArr));
        });
      });

    });
  });
});

// sort by name
sortByNameBtn.addEventListener("click", function () {
  axios.get(singers_url).then((res) => {
    let data = res.data;
    let sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    cards.innerHTML = "";
    sortedData.forEach((singer) => {
      cards.innerHTML += `
        <div class="card" style="width: 18rem;overflow:hidden">
        <div class="image-wrapper" style="width: 18rem; height: 200px;overflow: hidden;">
        <img
        style="height:200px;overflow: hidden;"
          src="${singer.image}"
          class="card-img-top"
          alt="..."
        />
        </div>
        <div class="card-body" style="width:100%">
          <h5 class="card-title">${singer.name}</h5>
          <p class="card-text">${singer.name} is ${singer.nationality}</p>
          <a href="detail.html?id=${singer.id}" class="btn btn-outline-primary details">Details</a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger fav"
            ><i class="fa-regular fa-heart"></i
          ></a>
          <a href="" name="${singer.id}" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
    });
    //  adding to fav
    let favArr;
    let localFav = JSON.parse(localStorage.getItem("fav"));
    if (localFav) {
      favArr = [...localFav];
    } else {
      favArr = [];
    }

    let favs = document.querySelectorAll(".fav");
    favs.forEach((fav) => {
      fav.addEventListener("click", function (e) {
        e.preventDefault();
        let singerId = this.getAttribute("name");

        if (favArr) {
          if (favArr.includes(singerId)) {
            favArr = favArr.filter((id) => id !== singerId);
            this.children[0].classList.replace("fa-solid", "fa-regular");
            Swal.fire({
              position: "bottom-right",
              icon: "error",
              title: "Singer removed from favourites!",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            favArr.push(singerId);
            this.children[0].classList.replace("fa-regular", "fa-solid");
            Swal.fire({
              position: "bottom-right",
              icon: "success",
              title: "Singer added to favourites",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        } else {
          favArr = [];
        }

        localStorage.setItem("fav", JSON.stringify(favArr));
      });
    });

  });
});


// count in nav
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



// document.addEventListener('DOMContentLoaded', function (e) {
//   e.preventDefault();
//   wishlistCount.innerText = `${countWish}`;
//   basketCount.innerText = `${countBasket}`;

// replace fav regular to solid


// })