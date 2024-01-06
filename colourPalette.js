//Displays and handles the colour palette.
function ColourPalette() {
    var selectedColourFill = document.getElementById("colourPaletteFill");
    var selectedColourStroke = document.getElementById("colourPaletteStroke");
    this.draw = function()
    {
        fill(selectedColourFill.value);
        stroke(selectedColourStroke.value);
    };
};
