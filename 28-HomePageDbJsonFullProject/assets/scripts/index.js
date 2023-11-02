let cards = document.querySelector(".cards");
let singerInput = document.querySelector(".singer-input");
let sortByNameBtn = document.querySelector(".sort-by-name-btn");

let singers_url = "http://localhost:3000/singers"
axios.get(singers_url).then((res) => {
  let data = res.data;

  data.forEach(singer => {
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
            ><i class="fa-solid fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`
  });


  let images = document.querySelectorAll(".card-img-top");
  console.log(images);

  images.forEach((image) => {
    image.addEventListener("mousemove", function () {
      image.style.transform = "scale(1.15)";
      image.style.transition = 'transform 0.25s';
    })


    image.addEventListener("mouseout", function () {
      image.style.transform = "scale(1)"
      image.style.transition = 'transform 0.25s';
    })
  })

})

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
            ><i class="fa-solid fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
      }
    })
  })
})

// sort by name
sortByNameBtn.addEventListener("click", function () {
  axios.get(singers_url).then(res => {
    let data = res.data;
    let sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
    cards.innerHTML = "";
    sortedData.forEach(singer => {
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
            ><i class="fa-solid fa-heart"></i
          ></a>
          <a href="" class="btn btn-outline-danger delete"
            ><i class="fa-solid fa-trash"></i
          ></a>
        </div>`;
    })
  })
})