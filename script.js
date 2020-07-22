var user = prompt("What is your age: ")

function checkAge(age) {
	if (age < 16) {
		console.log("Sorry, you are too young to drive this car. Powering off")
	}

	else if (age > 16) {
		console.log("Powwering On. Enjoy the Ride.")
	}

	else {
		console.log("Congratulations It's your first year of driving. Powering On")
	}
}

checkAge(user)