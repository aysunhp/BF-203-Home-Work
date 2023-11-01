let cards = document.querySelector(".cards");

let url = "https://fakestoreapi.com/products";
fetch(url).then((res) => res.json()).then((data) => {

  let favArr = [];
  let localFav = JSON.parse(localStorage.getItem("fav"));
  if (localFav) {
    favArr = localFav
  } else {
    favArr = []
  }
  console.log(favArr);
  console.log(data);

  data.forEach(element => {
    favArr.forEach(id => {
      if (element.id == id) {
        cards.innerHTML += `<div
        class="card"
        style=" box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        min-height:750px;
          width: 18rem;
          border-radius: 15px;">
            <img
          src="${element.image}"
          style="width: 286px; height: 400px; overflow: hidden"
          class="card-img-top"
          alt="..."/>
         <div class="card-body" style="position: relative">
          <h5 class="card-title">${element.title}</h5>
          <p>
            Price:
            <span style="color: blue; font-weight: bold">${element.price}</span>
          </p>
          <p class="rating">
            Rating:
            <span style="color: rgb(158, 0, 0); font-weight: bold">
              ${element.rating?.rate}</span
            >
          </p>
          <p class="card-text" style="position:relative;">
            Left stock:
            <span style="color: rgb(0, 158, 16); font-weight: bold"
              >${element.rating?.count}</span
            >
          </p>
          <div class="buttons d-flex justify-content-around" style="position:absolute; bottom: 25px">
            <div
              class="btn  btn-outline-primary mt-4"
              style="width: 70px; height: 50px; margin-right:50px ;margin-left:10px;"
            >
              <i
                class="fa-solid basketBtn fa-basket-shopping "
                name="${element.id}"
                style="font-size: 30px"
              ></i>
            </div>
            <div
              class="btn favBtn btn-outline-danger mt-4"
              style="width: 70px; height: 50px; margin-left:45px;"
            >
              <i
                class="fa-solid fa-heart "
                name="${element.id}"
                style="font-size: 30px"
              ></i>
            </div>
          </div>
        </div>`
      }
    })
  })

})
