let userInfo = document.querySelector(".user-info");
let orders = document.querySelector("tbody");
let profileName = document.querySelector(".profile")

let userArr = JSON.parse(localStorage.getItem("users"));
let user = userArr.find(item => item.userId);
let userId = user.userId;
let body = document.querySelector("body")
body.style.backgroundColor = "#FFFCFF"
axios.get(`http://localhost:3000/users/${userId}`).then(res => {
    let user = res.data;
    console.log(user);
    userInfo.style.backgroundColor = "#247BA0";
    userInfo.innerHTML = `
    <h5 style="margin-bottom:20px; color:white">${user.username}</h5>
    <p style="color:white">EMAIL: <strong style="color:white">${user.email}</strong></p>
    <p style="color:white"> PASSWORD: <strong style="color:white">${user.password}</strong></p>
    <p style="color:white">BALANCE: <strong style="color:white">${user.balance}</strong></p>`
    orders.style.backgroundColor = "#247BA0";
    profileName.innerHTML = `${user.username}`
    orders.innerHTML += `
    <tr style="font-size:20px">
<td scope="row">2</td>
<td>Jacob</td>
<td>Thornton</td>
</tr>`
})




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
                Swal.fire(
                    'Logged out!',
                    'success'
                )
                document.location.href = "index.html"
            }
        })

    })
}