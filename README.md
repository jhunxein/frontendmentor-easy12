# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![](./images/ss.jpg)

### Links

- Solution URL: [https://github.com/jhunxein/frontendmentor-easy12.git](https://github.com/jhunxein/frontendmentor-easy12.git)
- Live Site URL: [https://frontendmentor-easy12.vercel.app/](https://frontendmentor-easy12.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is my first time to experience this on my journey as a self taught web developer, the `setTimeout` function affects the `transition delay` of an element. The css code below is the highest time of delay that I have in the style sheet and that delay is also set in the js function `setTimeout`.

Code snippets

```css
.css-classes {
	transition: opacity 300ms ease 3.7s, transform 500ms ease 3.5s;
}
```

```js
function onStart() {
	const doc: Document = document;

	const loader = doc.getElementById('loader');
	const article = doc.getElementById('article');
	const footer = doc.getElementById('footer');

	document.body.style.overflow = 'hidden';
	document.body.style.pointerEvents = 'none';

	if (loader && article && footer) {
		setTimeout(() => {
			loader.classList.add('remove');

			article.classList.add('animate-onload');
			footer.classList.add('animate-onload');

			document.body.style.overflow = 'visible';
			document.body.style.pointerEvents = 'all';

			// RIGHT HERE
		}, 3700);
	}
}
```

### Useful resources

- [CSS Loader](https://codepen.io/julesforrest/pen/oNvzEgy) - This helped me for adding CSS loader from Jules Forrest. Go check-out his work on codepen.

## Author

- Frontend Mentor - [@jhunxein](https://www.frontendmentor.io/profile/jhunxein)
