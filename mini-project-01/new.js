// -- getElementById() 
// const mainHeading = document.getElementById('Heading');
// console.log(mainHeading.textContent);
// mainHeading.textContent= "Hello, world!";

// --querySelector AND textContent
// const mainHeading = document.querySelector("#Heading");
// mainHeading.textContent="Hello, world!";

// $ querySelector("div.content h1 
// const mainHeading = document.querySelector("div.content h1");
// console.log(mainHeading);
// mainHeading.textContent="Hello world!";

//||  get Attribute and set attribute
// < here we get the attribute and set the attribute from values
// const inptElement = document.querySelector(".form input");
// console.log(inptElement.getAttribute('type'));
// inptElement.setAttribute('type', 'Hello');
// console.log(inptElement.getAttribute('type'));
//> work on link
// const inptElement = document.querySelector(".nav-links li a");
// const inptElement = document.querySelector("a");
// console.log(inptElement.getAttribute('href'));
// inptElement.setAttribute('href', 'Hello');
// console.log(inptElement.getAttribute('href'));

// < get and set attributes from id and class attributes
// const idElement = document.getElementById("name");
// console.log(idElement.getAttribute('id'));
// idElement.setAttribute("id", "userName");
// console.log(idElement.getAttribute('id'));

//~  Error to be corrected
// const classElement = document.getElementsByClassName("btn");
// console.log(classElement.getAttribute('name'));
// console.log(classElement.setAttribute('name','showMore'));
// console.log(classElement[0].getAttribute('class'));



// ||    getElementByClassName & querySelectorAll

// < getElementByClassName
// const classElement = document.getElementsByClassName("nav-item");
// console.log(classElement);


// < querySelectorAll

// const allLinks = document.querySelectorAll("a");
const allLinks = document.querySelectorAll(".nav-links .nav-item");
// console.log(allLinks);

// < ForEach loop
allLinks.forEach((link)=>{
    // return link.setAttribute("href" , "valueChange");
    return link.getAttribute("href");
});
console.log(allLinks);

// ^ Pro Tips
// allLinks.forEach(link => link.style.color = "red");
// allLinks.forEach((link) => {
//     return link.style.color = "red"
// });

// ||    getElementsByTagName

