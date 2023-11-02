let dragDownBoxs = document.querySelectorAll(".drag-down-box")
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let boxsWrapper = document.querySelector(".boxs-wrapper");
let bottomBox = document.querySelector(".bottomBox")


for (let dragDownBox of dragDownBoxs) {

    dragDownBox.addEventListener("dragstart", function (e) {
        let selected = e.target;

        // to box1
        box1.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box1.addEventListener("drop", function (e) {
            e.preventDefault();
            console.log("salam");

            box1.appendChild(selected);
            selected = null;
        });

        // to box2
        box2.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box2.addEventListener("drop", function (e) {
            e.preventDefault();

            box2.appendChild(selected);
            selected = null;
        });

        // to box3

        box3.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        box3.addEventListener("drop", function (e) {
            e.preventDefault();

            box3.appendChild(selected);
            selected = null;
        });


        //    to box-wrapper

        bottomBox.addEventListener("dragover", function (e) {
            e.preventDefault();
        });

        bottomBox.addEventListener("drop", function (e) {
            e.preventDefault();

            bottomBox.appendChild(selected);
            selected = null;
        });

    })

}

