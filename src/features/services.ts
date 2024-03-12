document.addEventListener('astro:page-load', () => {
	let activeButton = document.querySelector<HTMLButtonElement>('.dot.active');
	const dots = document.querySelectorAll<HTMLButtonElement>('.dot');
	const carousel = document.getElementById('service-carousel');

	const observer = new IntersectionObserver(onIntersection, {
		root: carousel,
		threshold: 1,
	});

	function onIntersection(entries: IntersectionObserverEntry[]) {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				const id = entry.target.id.split('-')[1];
				const dot = document.getElementById(`dot-${id}`) as HTMLButtonElement;
				setActive(dot);
			}
		});
	}

	function setActive(dot: HTMLButtonElement) {
		if (activeButton) {
			activeButton.classList.remove('active');
		}
		dot.classList.add('active');
		activeButton = dot;
	}

	dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			const ele = document.getElementById(`service-${index}`);
			if (!ele || !carousel) {
				return;
			}
			carousel.scrollTo({
				left: ele.offsetWidth * index,
			});
			setActive(dot);
		});
	});

	document.querySelectorAll('.slide').forEach(slide => {
		observer.observe(slide);
	});
});
