function calculate() {
	var cycleLength = parseInt(document.getElementById("cycle-length").value);
    var periodLength = parseInt(document.getElementById("period-length").value);
    var lastPeriod = document.getElementById("last-period").value;
	var error = document.getElementById("error");
	var result = document.getElementById("result");

	// Log the input values to check if they are correct
	console.log("Cycle Length: " + cycleLength);
	console.log("Period Length: " + periodLength);
	console.log("Last Period: " + lastPeriod);

	// Convert the date string to a Date object
	lastPeriod = new Date(lastPeriod);

	// Add the cycle length to the last period date to get the next period date
	var nextPeriod = new Date(lastPeriod.getTime() + (cycleLength * 24 * 60 * 60 * 1000));

	// Calculate the fertile window
	var fertileStart = new Date(nextPeriod.getTime() - (14 * 24 * 60 * 60 * 1000));
	var fertileEnd = new Date(nextPeriod.getTime() - (10 * 24 * 60 * 60 * 1000));

	// Calculate the ovulation day
	var ovulationDay = new Date(fertileStart.getTime() + (2 * 24 * 60 * 60 * 1000));

	// Calculate the end date of the current period
	var periodEnd = new Date(lastPeriod.getTime() + ((periodLength - 1) * 24 * 60 * 60 * 1000));

	// Calculate the start date of the next period
	var nextPeriodStart = new Date(nextPeriod.getTime() - ((periodLength - 1) * 24 * 60 * 60 * 1000));

	// Check if the cycle length and period length are valid
	if (cycleLength < periodLength) {
		error.innerHTML = "Cycle length should be greater than period length.";
		result.innerHTML = "";
	} else {
		error.innerHTML = "";

		// Display the results
		result.innerHTML = "<h2>Results:</h2>" +
			"<p>Next Period: " + nextPeriod.toDateString() + "</p>" +
			"<p>Fertile Window: " + fertileStart.toDateString() + " - " + fertileEnd.toDateString() + "</p>" +
			"<p>Ovulation Day: " + ovulationDay.toDateString() + "</p>" +
			"<p>Current Period: " + lastPeriod.toDateString() + " - " + periodEnd.toDateString() + "</p>" +
			"<p>Next Period Start Date: " + nextPeriodStart.toDateString() + "</p>";
	}
	console.log(result.innerHTML);
}
