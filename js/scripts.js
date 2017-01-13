window.onload = function() {
	//Buttons
	var alertButton = document.getElementById("closebtn");
	var alertBanner	= document.getElementById("alertbtn");

	//Charts
	var dailyTrafficChart = document.getElementById("dailyTrafficChart");

	//Add Event listener for alert
	alertButton.addEventListener('click', () => {
		alertBanner.className = 'hide';
	})

	var myChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            // label: 'Daily Traffic',
            data: [75, 100, 275, 125, 225, 200, 100],
            backgroundColor: 'rgba(116, 119, 191, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        },
        title: {
        	display: true,
        	text: 'Daily Traffic'
        },
        legend: {
        	display: false
        },
        padding: '10'
    }
});
	
}
