function SprayCanTool(){
	//set an icon and a name for the object
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	var strokeWeightSlider = document.getElementById("strokeWeight"); // Creating a variable for the strokeweight using the HTML slider element
	var selectedColourFill = document.getElementById("colourPaletteFill"); //Creating a variable for the fill using the HTML colour picker element
	var selectedColourStroke = document.getElementById("colourPaletteStroke"); //Creating a variable for the stroke using the HTML colour picker element

	var points = 13;
	var spread = 10;

	this.draw = function()
	{
		if(mouseX > 0 && mouseY > 0  && mouseY < height) //Only allows drawing while the mouse is on the canvas
		{
			var r = random(5,10);
			
			if(mouseIsPressed)
			{
				strokeWeight(strokeWeightSlider.value/2); // Determines the value for the strokeweight using the slider value	
				fill(selectedColourFill.value) // Determines the value for the fill using the colour picker value
				stroke(selectedColourStroke.value) // Determines the value for the stroke using the colour picker value

				for(var i = 0; i < points; i++)
				{
					point(random(mouseX-spread, mouseX + spread),
					random(mouseY-spread, mouseY+spread));
				};
			};
		};
	};
};
