(function () {
    const colorButtons = document.querySelectorAll(".shape_button");
    colorButtons.forEach(function (colorButton) {
        colorButton.addEventListener('click', clickShape)
    })

    function clickShape(pressed) {
        clickedEvent = (pressed.target.value);
        getID = (pressed.target.id);
        console.log("You Pressed " + clickedEvent + " Button");
        console.log(getID);

        if (clickedEvent === "RED") {
            document.getElementById("square").style.backgroundColor = "red";
            document.getElementById("circle").style.backgroundColor = "red";
            document.getElementById("ellipse").style.backgroundColor = "red";
            document.getElementById("rectangle").style.backgroundColor = "red";
        }
        else if (clickedEvent === "BLUE") {
            document.getElementById("square").style.backgroundColor = "blue";
            document.getElementById("circle").style.backgroundColor = "blue";
            document.getElementById("ellipse").style.backgroundColor = "blue";
            document.getElementById("rectangle").style.backgroundColor = "blue";
        }
        else if (clickedEvent === "GREEN") {
            document.getElementById("square").style.backgroundColor = "green";
            document.getElementById("circle").style.backgroundColor = "green";
            document.getElementById("ellipse").style.backgroundColor = "green";
            document.getElementById("rectangle").style.backgroundColor = "green";
        }
        else if (clickedEvent === "ORANGE") {
            document.getElementById("square").style.backgroundColor = "orange";
            document.getElementById("circle").style.backgroundColor = "orange";
            document.getElementById("ellipse").style.backgroundColor = "orange";
            document.getElementById("rectangle").style.backgroundColor = "orange";
        }
        else {
            // console.log("You have not selected any color")
        }

        if (getID == "squareButton") {
            document.getElementById("square").style.display = "block";
            document.getElementById("circle").style.display = "none";
            document.getElementById("ellipse").style.display = "none";
            document.getElementById("rectangle").style.display = "none";
        }
        else if (getID == "circleButton") {
            document.getElementById("circle").style.display = "block";
            document.getElementById("square").style.display = "none";
            document.getElementById("ellipse").style.display = "none";
            document.getElementById("rectangle").style.display = "none";
        }
        else if (getID == "ellipseButton") {
            document.getElementById("ellipse").style.display = "block";
            document.getElementById("square").style.display = "none";
            document.getElementById("circle").style.display = "none";
            document.getElementById("rectangle").style.display = "none";
        }
        else if (getID == "rectangleButton") {
            document.getElementById("rectangle").style.display = "block";
            document.getElementById("square").style.display = "none";
            document.getElementById("circle").style.display = "none";
            document.getElementById("ellipse").style.display = "none";
        }
        else if (getID == "removeButton") {
            document.getElementById("square").style.cssText = "display: none; backgrond-color: transparent;";
            document.getElementById("circle").style.cssText = "display: none; backgrond-color: transparent;";
            document.getElementById("ellipse").style.cssText = "display: none; backgrond-color: transparent;";
            document.getElementById("rectangle").style.cssText = "display: none; backgrond-color: transparent;";
        }
        else {
            return;
        }
    }
})();

