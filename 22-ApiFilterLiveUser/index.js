let userFilter = document.querySelector(".user-filter");
let input = document.querySelector("input");
let listGroup = document.querySelector(".list-group");
console.log(listGroup)
input.addEventListener("input", function () {

    fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((users) => {

            users.forEach((user) => {

                listGroup.innerHTML += `
                <li class="list-group-item items">
                    <div>
                <img src="https://picsum.photos/65/65" alt="" />
                   </div>
             <div>
            <p>${user.name}</p>
          <p>${user.address?.city}</p>
          </div>
              </li>`;

            });
        });
})








