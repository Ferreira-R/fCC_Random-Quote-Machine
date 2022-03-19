const colors = [
	'#16a085',
	'#27ae60',
	'#2c3e50',
	'#f39c12',
	'#e74c3c',
	'#9b59b6',
	'#FB6964',
	'#342224',
	'#472E32',
	'#BDBB99',
	'#77B1A9',
	'#73A857',
];

// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener('DOMContentLoaded', () => {
	// DOM elements
	const button = document.querySelector('#newQuote');
	const quoteText = document.querySelector('#quote');
	const quoteAuthor = document.querySelector('#author');

	async function updateQuote() {
		button.classList.remove('aniBounce');
		// Fetch a random quote from the Quotable API
		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();
		if (response.ok) {
			// Update DOM elements
			quoteText.textContent = data.content;
			quoteAuthor.textContent = `- ${data.author}`;
		} else {
			quote.textContent = 'An error occured';
			console.log(data);
		}
		button.classList.add('aniBounce');
	}

	// Attach an event listener to the `button`
	button.addEventListener('click', updateQuote);

	// call updateQuote once when page loads
	updateQuote();
});
