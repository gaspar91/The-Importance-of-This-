$(document).ready(function(){
    $(".box").on("click",function(){
        var className = $(this).attr("class").split(" ");
        $("." + className[1]).css("background-color","red");
    });
});

//We're using the box class and an on("click") function.
//We're going to use a variable called classNames.
//And we're saying that the space is what we're splitting them by here.
//And we are going to change the background color to red.
//Our elements have two classes. This means our classNames variable is assigned to a string containing both classes, box and 1.
//In order for this function to work, we need to split the string 'box 1' wherever we encounter a space.
//So we achieve this using split().
//This will give us an array containing two strings.
//The first string will be box and the second one will be 1.

//What if we wanted only a certain class to change to red at any given time?

$(document).ready(function() {
    $(".box").on("click", function() {
    	/**
    	 * When we click on an element that has
    	 * a 'box' class, this event will be fired.
    	 */
    	var classNames = $(this).attr("class").split(" ");
    	var boxClass = classNames[0];
    	var className = classNames[1];
    	if ($(this).css("background-color") == "rgb(255, 0, 0)") {
    		// If this object is already red, turn it black
    		$("." + className).css("background-color", "#000"); 
    	} else {
    		// Else turn all elements with a box class black
    		// and then change the color of all elements
    		// with the same class name as the clicked element
    		// to red.
    		$("." + boxClass).css("background-color", "#000");
    		$("." + className).css("background-color", "red");
    	}
    });
})

//Then we would have to put an if statement.
//Delete your script, and we're going to do this again.
//What we've done is introduced an if statement to check the RGB value of the element. We want to know if it's red.
//If the RGB value is equal to 255, 0, 0, then we want to change it to black.
//We do this by setting the background color to 0, 0, 0.
//If the value is not red, then we'll set all the boxes to black.
//We do this to ensure there are no other red boxes. After that, we'll just have all the boxes that have the same number class set to red.
//We've also created the boxClass and className variables.
//We use these variables to store each string in our classNames array.
//boxClass is equal to box.
//className is equal to the number class on that element, which could be 1, 2 or 3.
//Within the else statement, we turn all elements with a boxClass black and then change the color of all elements with the same className as the clicked element to red.
//Now if we run the code, you can just click them on and off, depending on whether they're 1, 2, or 3.