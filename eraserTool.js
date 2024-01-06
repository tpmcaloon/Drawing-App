function EraserTool(){
	//set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
	this.name = "eraser";

	var strokeWeightSlider = document.getElementById("strokeWeight"); // Creating a variable for the strokeweight using the HTML slider element
	var selectedColourFill = document.getElementById("colourPaletteFill"); //Creating a variable for the fill using the HTML colour picker element
	var selectedColourStroke = document.getElementById("colourPaletteStroke"); //Creating a variable for the stroke using the HTML colour picker element

	var previousMouseX = -1;
	var previousMouseY = -1;

	this.eraser = function()
	{
		if(mouseX > 0 && mouseY > 0  && mouseY < height) //Only allows drawing while the mouse is on the canvas
		{
			if(mouseIsPressed) //if the mouse is pressed
			{
				strokeWeight(strokeWeightSlider.value); // Determines the value for the strokeweight using the slider value	
				stroke(255);
				if (previousMouseX == -1) //check if they previousX and Y are -1. set them to the current mouse X and Y if they are.
				{
					previousMouseX = mouseX;
					previousMouseY = mouseY;
				}
				//if we already have values for previousX and Y we can draw a line from 
				//there to the current mouse location
				else
				{
					line(previousMouseX, previousMouseY, mouseX, mouseY);
					previousMouseX = mouseX;
					previousMouseY = mouseY;
				};
			}
			//if the user has released the mouse we want to set the previousMouse values 
			//back to -1.
			else
			{
				previousMouseX = -1;
				previousMouseY = -1;
			};
		};
	};
};