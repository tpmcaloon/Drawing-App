function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
	this.name = "freehand";
	
	var strokeWeightSlider = document.getElementById("strokeWeight"); // Creating a variable for the strokeweight using the HTML slider element
	var selectedColourFill = document.getElementById("colourPaletteFill"); //Creating a variable for the fill using the HTML colour picker element
	var selectedColourStroke = document.getElementById("colourPaletteStroke"); //Creating a variable for the stroke using the HTML colour picker element

	var previousMouseX = -1;
	var previousMouseY = -1;

	this.draw = function()
	{
		if(mouseX > 0 && mouseY > 0  && mouseY < height) //Only allows drawing while the mouse is on the canvas
		{ 
			if(mouseIsPressed)
			{
				strokeWeight(strokeWeightSlider.value); // Determines the value for the strokeweight using the slider value	
				fill(selectedColourFill.value); // Determines the value for the fill using the colour picker value
				stroke(selectedColourStroke.value); // Determines the value for the stroke using the colour picker value
				
				if (previousMouseX == -1) //if we already have values for previousX and Y we can draw a line from there to the current mouse location
				{
					previousMouseX = mouseX;
					previousMouseY = mouseY;
				}
				else
				{
					line(previousMouseX, previousMouseY, mouseX, mouseY);
					previousMouseX = mouseX;
					previousMouseY = mouseY;
				};
			}
			else //if the user has released the mouse we want to set the previousMouse values back to -1.
			{
				previousMouseX = -1;
				previousMouseY = -1;
			};
		};
	};
};   