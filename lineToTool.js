//a tool for drawing straight lines to the screen. Allows the user to preview
//the a line to the current mouse position before drawing the line to the 
//pixel array.
function LineToTool(){
	//set an icon and a name for the object
	this.icon = "assets/lineTo.jpg";
	this.name = "LineTo";

	var strokeWeightSlider = document.getElementById("strokeWeight"); // Creating a variable for the strokeweight using the HTML slider element
	var selectedColourFill = document.getElementById("colourPaletteFill"); //Creating a variable for the fill using the HTML colour picker element
	var selectedColourStroke = document.getElementById("colourPaletteStroke"); //Creating a variable for the stroke using the HTML colour picker element

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the line to the screen 
	this.draw = function()
	{
		if(mouseX > 0 && mouseY > 0  && mouseY < height) //Only allows drawing while the mouse is on the canvas
		{
			if(mouseIsPressed) //only draw when mouse is clicked
			{
				strokeWeight(strokeWeightSlider.value); // Determines the value for the strokeweight using the slider value	
				fill(selectedColourFill.value); // Determines the value for the fill using the colour picker value
				stroke(selectedColourStroke.value); // Determines the value for the stroke using the colour picker value
				
				if(startMouseX == -1) //if it's the start of drawing a new line
				{
					startMouseX = mouseX;
					startMouseY = mouseY;
					drawing = true;
					loadPixels(); //save the current pixel Array
				}
				else
				{
					updatePixels(); //update the screen with the saved pixels to hide any previousline between mouse pressed and released
					line(startMouseX, startMouseY, mouseX, mouseY); //draw the line
				};
			}
			else if(drawing)//save the pixels with the most recent line and reset the drawing bool and start locations
			{
				loadPixels();
				drawing = false;
				startMouseX = -1;
				startMouseY = -1;
			};
		};
	};
};
