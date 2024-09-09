const headingSelect = document.getElementById("one"); //! document.getElementById use
headingSelect.innerText = "Hello World";


//! select by class
const selectByClassName = document.getElementsByClassName('heading');
selectByClassName[1].innerText="Hello World2";
selectByClassName[1].style = "background-color: #FABC3F";

const  selectByName = document.getElementsByName('h1');
selectByName.style="color: #F05A7E"
