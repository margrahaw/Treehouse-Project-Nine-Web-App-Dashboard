window.onload = function() {
	//Buttons
	var alertButton = document.querySelector("#closebtn");
	var alertBanner	= document.querySelector("#alertbtn");
	var sendButton = document.querySelector("#sendbtn");

	//Placeholder text
	var messageUser = document.querySelector("#msg-user");
	var searchUser = document.querySelector("#search-user");

	//Forms 
	var submitMessage = document.querySelector("#message-form");

	//Charts
	var trafficChart = document.querySelector("#trafficChart");
	var dailyTrafficChart = document.querySelector("#dailyTrafficChart");
	var mobileUsersChart = document.querySelector("#mobileUsersChart");

	//Add Event listener for alert
	alertButton.addEventListener('click', function() {
		alertBanner.className = 'hide';
	});

	// Error message if user of message field is empty
	sendButton.addEventListener('click', function() {

		// if message or user field is empty
		if(searchUser.value === "" || messageUser.value === "") {
			//alert message
		alert("Please complete both fields before sending message.");
		} else {
			submitMessage.submit();
			//confirm that message was sent
			alert("Your message has been sent.");
		}
	});


	// Traffic Chart
	var trafficCt = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["16-22", "23-25", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets: [{
            data: [0, 700, 1000, 800, 1100, 900, 1500, 2000, 900, 2000, 1900, 2250],
            backgroundColor: 'rgba(0, 128, 128, 0.4)',
            tension: 0,
            pointBorderColor: 'rgba(0, 128, 128, 1)',
            pointBackgroundColor: "#fff",
            pointRadius: 5,
            borderWidth: 2
        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }],
	            gridLines: {
	            	drawBorder: true
	            }
	        },
	        layout: {
	        	padding: 20
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
            backgroundColor: 'rgba(0, 128, 128, 1)',
            borderWidth: 1
        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero:true
	                }
	            }],
	            xAxes: [{
	        		barThickness: 30
	        	}]
	        },
	        layout: {
	        	padding: 20
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
            	"#FFC300",
            	"#FF5733",
            	"#008080"
            ],
            borderWidth: 1
        }]
	    },
	    options: {
	    	layout: {
	    		padding: 30
	    	},
	        legend: {
	        	position: 'right',
	        	labels: {
	        		boxWidth: 15,
	        		padding: 20
	        	}
	        }
	    }
	});
	
};
