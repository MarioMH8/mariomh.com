document.addEventListener('astro:page-load', () => {
	const allProjects: HTMLElement[] = [];
	let showProjects = [];
	const maxShow = 8;
	const defaultShow = 4;

	let show = defaultShow;
	let showCount = defaultShow;
	let actualShow: string | undefined;

	const $buttons = document.querySelectorAll<HTMLButtonElement>('.portfolio-btn');
	const $showMore = document.querySelector('#show-more');

	for (const element of document.querySelectorAll<HTMLElement>('.portfolio-preview')) {
		allProjects.push(element);
	}

	showProjects = allProjects;

	const toggleClass = (cls: string) => {
		let activeClass = '';
		for (const button of $buttons) {
			if (button.className === cls) {
				continue;
			}
			activeClass = button.className;
			button.className = cls;
		}

		return activeClass;
	};

	const toggleShowMore = () => {
		if (!$showMore) {
			return;
		}
		const isMoreThanShow = showProjects.length > show;
		$showMore.classList.toggle('force-hidden', !isMoreThanShow);
	};

	const showAll = () => {
		for (const [index, project] of allProjects.entries()) {
			const isOdd = (index + 1) % 2 === 0;
			project.classList.remove('odd');
			project.classList.toggle('hidden', !(index < show));
			if (isOdd) {
				project.classList.add('odd');
			}
		}
		showCount = show;
		showProjects = allProjects;
		if ($showMore) {
			$showMore.classList.remove('hidden');
		}
	};

	const showType = (type: string) => {
		showCount = 0;
		showProjects = allProjects.filter(project => project.dataset['type'] === type);
		for (const project of allProjects) {
			project.classList.remove('odd');
			if (project.dataset['type'] === type) {
				showCount++;
				const isOdd = showCount % 2 === 0;
				project.classList.toggle('hidden', !(showCount <= show));
				if (isOdd) {
					project.classList.add('odd');
				}
			} else {
				project.classList.add('hidden');
			}
		}
	};

	const renderProjects = () => {
		if (actualShow) {
			showType(actualShow);
		} else {
			showAll();
		}
	};

	const setShow = (buttonShow: string | undefined) => {
		actualShow = buttonShow;
		show = defaultShow;
	};

	if ($showMore) {
		$showMore.addEventListener('click', () => {
			show = show === maxShow ? defaultShow : maxShow;
			$showMore.textContent = show === maxShow ? 'Ver menos' : 'Ver más';
			renderProjects();
		});
	}
	for (const button of $buttons) {
		// eslint-disable-next-line no-loop-func
		button.addEventListener('click', () => {
			const datasetShow = button.dataset['show'];
			if ($showMore) {
				$showMore.textContent = 'Ver más';
			}
			if (actualShow !== datasetShow) {
				button.className = toggleClass(button.className);
			}
			setShow(datasetShow);
			renderProjects();
			toggleShowMore();
		});
	}
});
