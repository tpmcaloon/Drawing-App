function ShapeTool(){
	//set an icon and a name for the object
	this.icon = "assets/Shape.jpg";
	this.name = "Shape";

	var strokeWeightSlider = document.getElementById("strokeWeight"); // Creating a variable for the strokeweight using the HTML slider element
	var selectedColourFill = document.getElementById("colourPaletteFill"); //Creating a variable for the fill using the HTML colour picker element
	var selectedColourStroke = document.getElementById("colourPaletteStroke"); //Creating a variable for the stroke using the HTML colour picker element

	var previousMouseX = -1;
	var previousMouseY = -1;

	this.square = function() // function to draw a Square based on mouseX, mouseY & the strokeWeightSlider value
	{
		rect(mouseX - strokeWeightSlider.value/ 2, mouseY - strokeWeightSlider.value/ 2, strokeWeightSlider.value, strokeWeightSlider.value);
	};

	this.triangle = function() // function to draw a Triangle based on mouseX, mouseY & the strokeWeightSlider value
	{
		triangle(mouseX - strokeWeightSlider.value/2, mouseY, // Point A of Triangle
		mouseX + strokeWeightSlider.value/2, mouseY, //Point B of Triangle
		mouseX + strokeWeightSlider.value/64, mouseY -  strokeWeightSlider.value/ 2); //Point C of Triangle
	};

	this.star = function() // function to draw a Star based on mouseX & mouseY 
	{
		beginShape();
		vertex(mouseX + 190, mouseY - 125)
		vertex(mouseX + 110, mouseY - 125)
		vertex(mouseX + 80, mouseY - 215)
		vertex(mouseX + 40, mouseY - 125)
		vertex(mouseX - 40, mouseY - 125)
		vertex(mouseX + 25, mouseY - 70)
		vertex(mouseX, mouseY)
		vertex(mouseX + 75, mouseY - 40)
		vertex(mouseX + 150, mouseY)
		vertex(mouseX + 125, mouseY - 70)
		endShape(CLOSE);
	};

	this.circle = function()
	{
		ellipse(mouseX,mouseY, strokeWeightSlider.value)
	};

	this.oval = function()
	{
		ellipse(mouseX,mouseY, strokeWeightSlider.value*3, strokeWeightSlider.value)
	}

	this.draw = function()
	{
		if(mouseX > 0 && mouseY > 0  && mouseY < height) //Only allows drawing while the mouse is on the canvas
		{
			strokeWeight(10)
			var x = document.getElementById("Shapes");
			var i = x.selectedIndex;
			if(x.options[i].text === "Square" && mouseIsPressed) // If the square shape option is selected then the draw square function is used
			{
				this.square();
			}
			else if(x.options[i].text === "Triangle" && mouseIsPressed) // If the triangle shape option is selected then the draw triangle function is used
			{
				this.triangle();
			}
			else if(x.options[i].text === "Star" && mouseIsPressed) // If the star shape option is selected then the draw star function is used
			{
				this.star();
			}
			else if(x.options[i].text === "Circle" && mouseIsPressed) // If the star shape option is selected then the draw star function is used
			{
				this.circle();
			}
			else if(x.options[i].text === "Oval" && mouseIsPressed) // If the star shape option is selected then the draw star function is used
			{
				this.oval();
			};

			fill(selectedColourFill.value) // Determines the value for the fill using the colour picker value
			stroke(selectedColourStroke.value) // Determines the value for the stroke using the colour picker value
			
			if (previousMouseX == -1) ///if the user has released the mouse we want to set the previousMouse values back to -1.
			{
				previousMouseX = mouseX;
				previousMouseY = mouseY;
			}
			else
			{
				previousMouseX = -1;
				previousMouseY = -1;
			};
		};
	};
};