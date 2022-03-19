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
	const quoteText = document.querySelector('.quoteText');
	const quoteAuthor = document.querySelector('.quoteAuthor');
	const quote = document.querySelector('#quote');
	const author = document.querySelector('#author');

	async function updateQuote() {
		quoteText.classList.add('fadeOut');
		quoteText.classList.remove('fadeIn');
		quoteAuthor.classList.add('fadeOut');
		quoteAuthor.classList.remove('fadeIn');
		// Fetch a random quote from the Quotable API
		const response = await fetch('https://api.quotable.io/random');
		const data = await response.json();
		quoteText.addEventListener('animationend', e => {
			// console.log(e.animationName);
			if (e.animationName == 'fadeOut') {
				if (response.ok) {
					// Update DOM elements
					quote.textContent = data.content;
					author.textContent = `- ${data.author}`;
					quoteText.classList.add('fadeIn');
					quoteAuthor.classList.add('fadeIn');
				} else {
					quote.textContent = 'An error occured';
					console.log(data);
				}
				quoteText.classList.remove('fadeOut');
				quoteAuthor.classList.remove('fadeOut');
			}
		});
	}

	// Attach an event listener to the `button`
	button.addEventListener('click', updateQuote);

	// call updateQuote once when page loads
	updateQuote();
});
