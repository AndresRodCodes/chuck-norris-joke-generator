// EVENT LISTENTERS
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
	const number = document.querySelector('#joke-num[type="number"]').value;

	// Instantiate HTTP Request object
	const xhr = new XMLHttpRequest();
	// Open connection
	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);
	// On load
	xhr.onload = function() {
		if (this.status === 200) {
			// Parse JSON to objects
			const response = JSON.parse(this.responseText);
			let output = '';
			// Verify response was successful
			if (response.type === 'success') {
				// loop through jokes
				response.value.forEach(function(joke) {
					output += `<li>${joke.joke}</li>`;
				});
				// Update UI
				document.querySelector('.jokes').innerHTML = output;
			} else {
				output += `<li>Something went wrong</li>`;
			}
		}
	};
	xhr.send();

	e.preventDefault();
}
