const images = ["0.jpg", "1.jpg", "2.jpg"];

const todaysImage = images[Math.floor(Math.random() * images.length)];

// create html element in javascript
const image = document.createElement("img");
image.src = `img/${todaysImage}`; //set src in newly created element
document.body.appendChild(image); //add at the last part

//add at the top part
// document.body.prepend(image);
