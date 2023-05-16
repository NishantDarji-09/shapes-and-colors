(function () {
    const colorButtons = document.querySelectorAll(".colorChange");
    colorButtons.forEach(function (colorButton) {
        colorButton.addEventListener('click', changeColor)
    })

    const shapeButtons = document.querySelectorAll(".shapeChange");
    shapeButtons.forEach(function(shapeButton){
        shapeButton.addEventListener('click', changeShape);
    })
    
    function changeColor() {
        changedColor = (this.value);
        // console.log("You Pressed " + changedColor + " Button");
        // console.log(changedShape);

        if (changedColor === "RED") {
            document.getElementById("square").style.backgroundColor = "red";
            document.getElementById("circle").style.backgroundColor = "red";
            document.getElementById("ellipse").style.backgroundColor = "red";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
        else if (changedColor === "BLUE") {
            document.getElementById("square").style.backgroundColor = "blue";
            document.getElementById("circle").style.backgroundColor = "blue";
            document.getElementById("ellipse").style.backgroundColor = "blue";
            document.getElementById("rectangle").style.backgroundColor = "blue";
        }
        else if (changedColor === "GREEN") {
            document.getElementById("square").style.backgroundColor = "green";
            document.getElementById("circle").style.backgroundColor = "green";
            document.getElementById("ellipse").style.backgroundColor = "green";
            document.getElementById("rectangle").style.backgroundColor = "green";
        }
        else if (changedColor === "ORANGE") {
            document.getElementById("square").style.backgroundColor = "orange";
            document.getElementById("circle").style.backgroundColor = "orange";
            document.getElementById("ellipse").style.backgroundColor = "orange";
            document.getElementById("rectangle").style.backgroundColor = "orange";
        }
        else {
            console.error("You have not selected any color");
        }
    }

    function changeShape(){
        changedShape = (this.id);
        // console.log("You Pressed " + changedShape + " Button");

        if (changedShape == "squareButton") {
            // document.getElementById("square").style.display = "block";
            setTimeout(() => {
                document.getElementById("square").style.display = "block";
                document.getElementById("circle").style.display = "none";
                document.getElementById("ellipse").style.display = "none";
                document.getElementById("rectangle").style.display = "none"; 
            }, selectedTimeout);
        }
        else if (changedShape == "circleButton") {
            setTimeout(() => {
                document.getElementById("circle").style.display = "block";
                document.getElementById("square").style.display = "none";
                document.getElementById("ellipse").style.display = "none";
                document.getElementById("rectangle").style.display = "none";
            }, selectedTimeout);
        }
        else if (changedShape == "ellipseButton") {
            setTimeout(() => {
                document.getElementById("ellipse").style.display = "block";
                document.getElementById("square").style.display = "none";
                document.getElementById("circle").style.display = "none";
                document.getElementById("rectangle").style.display = "none";
            }, selectedTimeout);
        }
        else if (changedShape == "rectangleButton") {
            setTimeout(() => {
                document.getElementById("rectangle").style.display = "block";
                document.getElementById("square").style.display = "none";
                document.getElementById("circle").style.display = "none";
                document.getElementById("ellipse").style.display = "none";
            }, selectedTimeout);
        }
        else if (changedShape == "removeButton") {
            setTimeout(() => {
                document.getElementById("square").style.cssText = "display: none; backgrond-color: transparent;";
                document.getElementById("circle").style.cssText = "display: none; backgrond-color: transparent;";
                document.getElementById("ellipse").style.cssText = "display: none; backgrond-color: transparent;";
                document.getElementById("rectangle").style.cssText = "display: none; backgrond-color: transparent;";
            }, selectedTimeout);
        }
        else {
            console.error("You have an error");
        }
    }
    

    const valueOfTransition = document.querySelectorAll("#transitionBox");
    valueOfTransition.forEach(function (Transition) {
        Transition.addEventListener('click', clickedTransition)
        }) 

    function clickedTransition(valueOfTransition){
        valueOfTransition = (valueOfTransition.target.value);
        document.getElementById("square").style.transition = `${valueOfTransition}`;
        document.getElementById("circle").style.transition = `${valueOfTransition}`;
        document.getElementById("ellipse").style.transition = `${valueOfTransition}`;
        document.getElementById("rectangle").style.transition = `${valueOfTransition}`;
    }
    var selectedTimeout = "0000";
    function timeOut(){
        secondList = document.querySelectorAll("#timeout");
        secondList.forEach(function(setTimeOut) {
            setTimeOut.addEventListener('click', function(selectTime){
                selectedTimeout = this.value;
            console.log(selectedTimeout);
            })
        })
    }
    timeOut();
    // window.onload = timeOut();
    

})();

