let userInfo = document.querySelector(".user-info");
let orders = document.querySelector("tbody");
let profileName = document.querySelector(".profile")
let userName = document.querySelector(".user-name");
let userEmail = document.querySelector(".user-email");
let userBalance = document.querySelector(".user-balance");
let logOutBtn = document.querySelector(".log-out-btn");

let userArr = JSON.parse(localStorage.getItem("users"));
let user = userArr.find(item => item.userId);
let userId = user.userId;
let body = document.querySelector("body")
body.style.backgroundColor = "#FFFCFF"
axios.get(`http://localhost:3000/users/${userId}`).then(res => {
    let user = res.data;
    userName.textContent += user.username;
    userEmail.textContent += user.email;
    userBalance.textContent += user.balance;
    profileName.innerHTML = `${user.username}`
    user.order.forEach(item => {
        orders.innerHTML += `
    <tr style="font-size:20px">
<td scope="row">${item.id}</td>
<td>${item.totalPrice}</td>
<td>${item.orderDate}</td>
</tr>`;
    })
})
logOutBtn.addEventListener("click", function (e) {
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
            localStorage.clear();
            Swal.fire(
                'Logged out!',
                'success'
            )
            document.location.href = "index.html"
        }
    })
})

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




// profile and logOut
let profile = document.querySelector(".profile");
let logOut = document.querySelector(".log-out");
let login = document.querySelector(".login");
let register = document.querySelector(".register");


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
                localStorage.clear();
                Swal.fire(
                    'Logged out!',
                    'success'
                )
                document.location.href = "index.html"
            }
        })

    })
}