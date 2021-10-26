$(document).ready(show_cupcakes);
// custome name
var customerName = document.querySelector("#customerName");
var nameError = document.querySelector(".nameError");
// count
var count = document.querySelector("#count");
var countError = document.querySelector(".countError ");
// type
var type = document.querySelector("#type");
var typeError = document.querySelector(".typeError");
// delivery
var deliveryTime = document.querySelector("#deliveryTime");
var deliveryError = document.querySelector(".deliveryError");
// allergies
var allergies = document.querySelector("#allergies");
var allergiesError = document.querySelector(".allergiesError");

// submit button
var submitBtn = document.querySelector("#submitBtn");

var cup_cakes = [
  { name: "Chocolate", calories: "high", weight: "200gm" },
  { name: "Carrot", calories: "medium", weight: "150gm" },
  { name: "Banana", calories: "high", weight: "200gm" },
  { name: "Strawberry", calories: "low", weight: "160gm" },
  { name: "Peanut", calories: "medium", weight: "200gm" },
];

function show_cupcakes() {
  //write code that shows the cupcakes in the table as per the instructions
  for (i = 0; i < 5; i++) {
    document.getElementsByClassName("name")[i].innerHTML = cup_cakes[i].name;
    document.getElementsByClassName("calories")[i].innerHTML =
      cup_cakes[i].calories;
    document.getElementsByClassName("weight")[i].innerHTML = cup_cakes[i].name;
  }
}

function validate(e) {
  var validName = false;
  var validCount=false;
var validType=false;
var validTime=false;
var validAllergies=false;
  // customer name validation

  if (customerName.value.length < 5 || customerName.value.length > 16) {
    nameError.innerHTML =
      "Your name must be at least five characters long and at most 16";
    nameError.style.color = "red";
    customerName.addEventListener("keypress", () => {
      if (customerName.value.length > 16) {
        nameError.innerHTML = "Your name must be  at most 16 characters";
        nameError.style.color = "red";
      } else {
        if (customerName.value.length < 16) {
          nameError.innerHTML = "Okay!";
          nameError.style.color = "green";
        }
      }
     
    }); 
  } else validName =true;

  localStorage.setItem("cutomerName", customerName.value);
  // count validation

  if (count.value == 0) {
    countError.innerHTML = "You have to choose at least 1 and at most 15";
    countError.style.color = "red";
    count.addEventListener("change", () => {
      countError.innerHTML = "Okay!";
      countError.style.color = "green";
    });
  } else validCount =true;


  //   type validation

  if (type.value === "None") {
    typeError.innerHTML = "You have to choose cupcake type";
    typeError.style.color = "red";
    type.addEventListener("change", () => {
      typeError.innerHTML = "Okay!";
      typeError.style.color = "green";
    });
  }else validType =true;

  //  delivery Time validation

  if (deliveryTime.value === "") {
    deliveryError.innerHTML = "You have to determine delivery Time";
    deliveryError.style.color = "red";
    deliveryTime.addEventListener("change", () => {
      console.log(deliveryTime.value);
      deliveryError.innerHTML = "Okay!";
      deliveryError.style.color = "green";
    });
  }else validTime =true;
  //   allergies validation

  if (type.value === "chocolate" && allergies.value === "dairyFree") {
    allergiesError.innerHTML = " chocolate cake is not dairy free option";
    allergiesError.style.color = "red";
  } else if (type.value === "chocolate" && deliveryTime.value === "4:00 PM") {
    deliveryError.innerHTML = " chocolate cake cannot be delivered at 4 PM";
    deliveryError.style.color = "red";
  }else  {
    allergiesError.innerHTML = "Okay";
    allergiesError.style.color = "green"; 
   validAllergies=true;}
 


  if (validName === false || validCount===false || validType===false || validTime===false || validAllergies===false) {
    e.preventDefault();
  } else {
    e.defaultPrevented = false;
  }
 
 
}

var welcome = document.querySelector("#welcome");
function show_storage() {
  //write code that shows the name from local storage
  var name = localStorage.getItem("cutomerName");
  welcome.innerHTML = `welcome ${name}`;
}
