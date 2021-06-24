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
		}, 3700);
	}
}
onStart();
