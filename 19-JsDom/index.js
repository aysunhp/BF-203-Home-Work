let body = document.querySelector("body");
let wrapperDiv = document.createElement("div");
let bigBox = document.createElement("div");
let wrapper = document.createElement("div");
let contentWrapper = document.createElement("div");
let bigBoxHeading = document.createElement("h1");

wrapperDiv.style.width = "100%";
wrapperDiv.style.height = "85vh";
wrapperDiv.style.border = "1px solid lightgray";

bigBox.style.width = "960px";
bigBox.style.height = "360px"
bigBox.style.backgroundColor = "#333333"
bigBox.style.margin = "0 auto";
bigBox.style.marginTop = "10px";
bigBox.style.display = "flex";
bigBox.style.justifyContent = "center";
bigBox.style.alignItems = "center";

bigBoxHeading.innerText = "960 x 360px";
bigBoxHeading.style.color = "white";
bigBox.appendChild(bigBoxHeading);

wrapper.style.width = "960px";
wrapper.style.margin = "0 auto";
wrapper.style.display = "flex";
wrapper.style.justifyContent = "space-between";
wrapper.style.alignItems = "center";
wrapper.style.marginTop = "40px";

for (let i = 0; i < 3; i++) {
    const smallBox = document.createElement('div');
    const smallBoxHeading = document.createElement('h3');
    smallBoxHeading.textContent = "290 x 180px";
    smallBoxHeading.style.color = "white"
    smallBox.style.width = "290px";
    smallBox.style.height = "180px";
    smallBox.style.backgroundColor = "#333333";
    smallBox.style.border = "5px solid whitesmoke";
    smallBox.style.display = "flex";
    smallBox.style.justifyContent = "center";
    smallBox.style.alignItems = "center";
    smallBox.appendChild(smallBoxHeading);
    wrapper.append(smallBox);
}

for (let i = 0; i < 3; i++) {
    const contentBox = document.createElement('div');
    const contentHeading = document.createElement('h4');
    const p = document.createElement('p');
    const readMore = document.createElement('a');
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-angles-right');
    contentHeading.textContent = "Indonectetus facilis";
    p.textContent = " Lorem ipsum dolor sit amet consectetur, adipisicing elit perspiciatis possima.";
    icon.style.fontSize = "8px"
    icon.style.margin = "1px 0 0 3px"
    readMore.textContent = "Read More";
    readMore.style.color = "orange";
    readMore.style.textDecoration = "none"
    contentHeading.style.fontStyle = "italic"
    contentBox.style.width = "290px";
    contentBox.style.height = "180px";
    contentBox.style.border = "5px solid white";
    readMore.style.display = "flex";
    readMore.style.justifyContent = "flex-end";
    readMore.style.alignItems = "center";
    readMore.appendChild(icon);
    contentBox.appendChild(contentHeading);
    contentBox.appendChild(p);
    contentBox.appendChild(readMore);
    contentWrapper.append(contentBox);
}

contentWrapper.style.width = "960px";
contentWrapper.style.margin = "0 auto";
contentWrapper.style.display = "flex";
contentWrapper.style.justifyContent = "space-between";
contentWrapper.style.alignItems = "flex-start";

body.appendChild(wrapperDiv);
wrapperDiv.appendChild(bigBox);
wrapperDiv.appendChild(wrapper)
wrapperDiv.appendChild(contentWrapper);



