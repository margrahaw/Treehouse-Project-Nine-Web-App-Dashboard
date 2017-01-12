window.onload = function() {
	//Buttons
	var alertButton = document.getElementById("closebtn");
	var alertBanner	= document.getElementById("alertbtn");

	//Add Event listener for alert
	alertButton.addEventListener('click', () => {

		alertBanner.className = 'hide';
	})

	
}
