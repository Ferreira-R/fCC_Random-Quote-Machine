// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener('DOMContentLoaded', () => {
	// DOM elements
	const button = document.querySelector('#newQuote');
	const quoteText = document.querySelector('#quote');
	const quoteAuthor = document.querySelector('#author');

	async function updateQuote() {
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
	}

	// Attach an event listener to the `button`
	button.addEventListener('click', updateQuote);

	// call updateQuote once when page loads
	updateQuote();
});
