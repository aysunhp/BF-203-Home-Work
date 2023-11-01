let cards = document.querySelector(".cards");
let subTotalQuantity = document.querySelector("#quantity");
let totalPrice = document.querySelector("#price");
let checkOutBtn = document.querySelector(".check-out");
let noCard = document.querySelector(".no-card-span");
let removeAll = document.querySelector(".remove-all");



let url = "https://fakestoreapi.com/products";
fetch(url).then((res) => res.json()).then((data) => {
  let arr = [];
  let localArr = JSON.parse(localStorage.getItem("card"));
  if (localArr) {
    arr = localArr
  } else {
    arr = []
  }
  console.log(arr);
  console.log(data);

  data.forEach(element => {
    arr.forEach(id => {
      if (element.id == id) {
        noCard.innerHTML = "";
        cards.innerHTML += `<div
                style="
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 5px;
                  margin-bottom: 10px;
                "
                id="card"
              >
                <img
                  src="${element.image}"
                  style="width: 80px; height: 80px; overflow: hidden"
                  class="card-img-top"
                  alt="..."
                />
    
                <div style="display: inline; margin-right:20px"><h4 class="card-name">${element.title}</h4></div>
                <div style="display: inline">
                  <button
                    class="btn btn-secondary decrease-btn"
                    style="margin-right: 5px; border-radius: 50%"
                  >
                    +
                  </button>
                  <span id="card-quantity">1</span>
                  <button
                    class="btn btn-secondary increase-btn"
                    style="margin-left: 5px; border-radius: 50%"
                  >
                    -
                  </button>
                </div>
                <div>
                  <h3>$ <span id="card-price">0</span></h3>
                  <a
                    href=""
                    style="
                      display: block;
                      text-decoration: underline;
                    "
                    class="text-primary  save-for-later"
                    >Save for later</a
                  >
                  <a
                    href=""
                    class="text-danger remove" name=${element.id}
                    style="display: block; text-decoration: underline"
                    >Remove</a
                  >
                </div>
              </div>`;

      }

    })
  })


  let cardQuantity = document.querySelectorAll("#card-quantity");
  let cardPrice = document.querySelectorAll("#card-price");
  // cardPrice.innerHTML = `${cardQuantity}*${element.price}`


  let increaseBtns = document.querySelectorAll(".increase-btn");
  increaseBtns.forEach(increaseBtn => {
    console.log(increaseBtn)
    increaseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let newprice = cardPrice--;
      cardPrice.innerText = `${newprice}`

    })
  })


  let decreaseBtns = document.querySelectorAll(".decrease-btn");
  decreaseBtns.forEach(decreaseBtn => {
    decreaseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      let newprice = cardPrice--;
      cardPrice.innerText += `${newprice}`

    })
  })
  subTotalQuantity.innerHTML = arr.length;
  // remove button
  let removes = document.querySelectorAll(".remove");
  console.log(removes)
  removes.forEach(remove => {
    remove.addEventListener("click", function (e) {
      e.preventDefault();
      // console.log(this.parentElement.parentElement)
      // console.log(this.name)
      let itemId = this.name;
      console.log(itemId);
      let index = arr.indexOf(itemId);
      console.log(index)
      console.log(arr)

      this.parentElement.parentElement.remove();
      arr.splice(index, 1)
      console.log(arr)
      localStorage.setItem("card", JSON.stringify(arr));
    })

  })
  // save for leter button
  let saveForLeter = document.querySelectorAll(".save-for-later");
  saveForLeter.forEach(save => {
    save.addEventListener("click", function (e) {
      e.preventDefault();
      console.log()
      Swal.fire({
        title: `${this.parentElement.previousElementSibling.previousElementSibling.children[0].innerText} Saved for leter`,
      })
    })
  })

})

removeAll.addEventListener("click", function (e) {
  e.preventDefault();
  cards.innerHTML = "";
  totalPrice.innerHTML = "0"
  subTotalQuantity.innerText = "0"
  localStorage.removeItem("card");
})


checkOutBtn.addEventListener("click", function (e) {
  e.preventDefault();
  Swal.fire({
    title: `Your cards sending to checkout`,
  })
  subTotalQuantity.innerText = "0"
  totalPrice.innerHTML = "0"
  cards.innerHTML = "";
  localStorage.removeItem("card");
})

// localStorage.clear()