let container = document.querySelector(".container");

let id = new URLSearchParams(location.search).get("id")
console.log(id);

let singers_url = "http://localhost:3000/singers"
axios.get(singers_url).then((res) => {
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
      <p class="card-text">NATIONALITY: ${found.name} is <b>${found.nationality}</b></p>
      <p class="card-text">AGE: ${found.age}</p>
      <p class="card-text">GENRE: ${found.genre}</p>
      <a href="index.html" class="btn btn-outline-primary details">Home</a>
    </div>
</div>`;

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