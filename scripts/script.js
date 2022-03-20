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

const randomColor = () => colors[Math.floor(Math.random() * colors.length)];

// Powered by Quotable
// https://github.com/lukePeavey/quotable

document.addEventListener('DOMContentLoaded', () => {
	// DOM elements
	const bodyElm = document.querySelector('body');
	const quoteText = document.querySelector('.quoteText');
	const quoteAuthor = document.querySelector('.quoteAuthor');
	const quote = document.querySelector('#quote');
	const author = document.querySelector('#author');
	const button = document.querySelector('#newQuote');

	let newColor = '#000000';

	async function changeBackground() {
		// bodyElm.style.animation = 'changeBackground 3s fordwards';
		newColor = randomColor();
		document.documentElement.style.setProperty('--newColor', newColor);
		bodyElm.classList.add('changeBackground');
		// bodyElm.classList.add('changeColor');
	}

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
			if (e.animationName === 'fadeOut') {
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
		bodyElm.addEventListener('animationend', e => {
			if (e.animationName === 'changeBackground') {
				bodyElm.style.setProperty('background', newColor);
				bodyElm.style.setProperty('color', newColor);
				bodyElm.classList.remove('changeBackground');
			}
		});
	}

	// Attach an event listener to the `button`
	button.addEventListener('click', updateQuote);
	button.addEventListener('click', changeBackground);

	// call updateQuote once when page loads
	updateQuote();
	changeBackground();
});
