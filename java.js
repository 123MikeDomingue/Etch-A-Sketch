// Setting up the 16 X 16 gird of square divs
  let gridContainer = document.getElementById("container");
function CreateDivs(rows, cols) {

  // gridContainer.style.display = "flex";

  gridContainer.style.setProperty('--grid-rows', rows);
  gridContainer.style.setProperty('--grid-cols', cols);

  gridContainer.style.justifyContent = "center";
  gridContainer.style.alignItems = "center";
  gridContainer.style.border = "1px solid black";
  // gridContainer.style.height = "100%";
  // gridContainer.style.width = "100%";

  for (let i = 0; i < (rows * cols); i++) {

    
      
      let squaredivs = document.createElement("div");
      squaredivs.setAttribute("id", "squaredivs");

      // This numbers all the squares starting from 1
      // squaredivs.innerText = (i + 1)

      squaredivs.style.display = "grid";

      // squaredivs changing color once i hover overthem.
      let mouseOverFunction = function () {
        this.style.background = "#000";
      };

      squaredivs.onmouseover = mouseOverFunction;
      // const numberOfDivs = prompt("How big do you Want this Sketch Pad to be");

      squaredivs.style.border = "3px solid black";

      squaredivs.style.gridGap = "10px";

      // changing the padding to a lower amount can shrink the grid
      squaredivs.style.padding = "35px";
      

      gridContainer.appendChild(squaredivs).className = 'grid-item';

      // if ((squaredivs.style.width = "100%")) {
      //   squaredivs.style.color = "";
      // }

    // function to clear the grid

    function cleargrid(event){
     document.getElementById('container').innerHTML = ""
    }

    
     let clearbutton = document.getElementById('clearbtn');

     clearbutton.addEventListener('click', cleargrid )

    

    if (rows * cols > 10000){
     cleargrid()
    }

        
  
  }
}
// This is just a fixed amount
 CreateDivs(16, 16);
// what I need to do is figure out a way to make the grid size change based on how much i want it to be. So if i want a 4 x 4 it would automatically get adjusted to that

function userInput() {
  // return prompt("Enter a number to build a square grid ");

  let gridQuestion = prompt("Enter a number to build a square grid (limit = 100)");

   gridContainer.style.gridTemplateRows = `repeat(${gridQuestion}, 1fr)`;
   gridContainer.style.gridTemplateColumns = `repeat(${gridQuestion}, 1fr)`;
  //  since the createDivs fucntion has  two parameter i would also have to pass in two arguments
   CreateDivs(gridQuestion, gridQuestion);

   
  }



 







// function displayMessage(){
//   document.getElementById("msg").innerHTML = "The button has been clicked"
// }

// let btn = document.getElementById("mybtn");

// btn.addEventListener("click", displayMessage)
