window.onload = function() {
	//Buttons
	var alertButton = document.getElementById("closebtn");
	var alertBanner	= document.getElementById("alertbtn");

	//Charts
	var trafficChart = document.getElementById('trafficChart');
	var dailyTrafficChart = document.getElementById("dailyTrafficChart");
	var mobileUsersChart = document.getElementById('mobileUsersChart');
	var recentActivityChart = document.getElementById('recentActivityChart');
	var messageUsersChart = document.getElementById('messageUsersChart');
	var settingsChart = document.getElementById('settingsChart');

	//Add Event listener for alert
	alertButton.addEventListener('click', () => {
		alertBanner.className = 'hide';
	})

	// Traffic Chart
	var trafficCt = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-25", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [0, 700, 1000, 800, 1100, 900, 1500, 2000, 900, 2000, 1900, 2100],
            backgroundColor: 'rgba(116, 119, 191, 0.4)',
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
	        	text: 'Traffic'
	        },
	        legend: {
	        	display: false
	        }
	    }
	});

	// Daily Traffic Chart 
	var dailyCt = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
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
	        }
	    }
	});
	// Mobile Users Chart
	var mobileCt = new Chart(mobileUsersChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablets", "Desktop"],
        datasets: [{
            data: [30, 40, 150],
            backgroundColor: [
            	"#87CEEB",
            	"#8FBC8F",
            	"#7477BF"
            ],
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
	        	text: 'Mobile Users',
	        	position: 'left'
	        },
	        legend: {
	        	position: 'right',
	        	labels: {
	        		boxWidth: 15,
	        		padding: 20,
	        		fontStyle: "bold"
	        	}
	        }
	    }
	});



	// Recent Activity Chart

	// Message Users Chart

	// Settings Chart
	
}
