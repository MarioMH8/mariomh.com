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

	if (!$showMore) {
		return;
	}

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
		$showMore.classList.toggle('hidden', showProjects.length <= show);
	};

	const showAll = () => {
		for (const [index, project] of allProjects.entries()) {
			project.classList.toggle('hidden', !(index < show));
		}
		showCount = show;
		showProjects = allProjects;
		$showMore.classList.remove('hidden');
	};

	const showType = (type: string) => {
		showCount = 0;
		showProjects = allProjects.filter(project => project.dataset['type'] === type);
		for (const project of allProjects) {
			if (project.dataset['type'] === type) {
				showCount++;
				project.classList.toggle('hidden', !(showCount <= show));
			} else {
				project.classList.add('hidden');
			}
		}
	};

	function renderProjects() {
		if (actualShow) {
			showType(actualShow);
		} else {
			showAll();
		}
	}

	$showMore.addEventListener('click', () => {
		show = show === maxShow ? defaultShow : maxShow;
		$showMore.textContent = show === maxShow ? 'Ver menos' : 'Ver más';
		renderProjects();
	});
	for (const button of $buttons) {
		button.addEventListener('click', () => {
			actualShow = button.dataset['show'];
			show = defaultShow;
			$showMore.textContent = 'Ver más';
			button.className = toggleClass(button.className);
			renderProjects();
			toggleShowMore();
		});
	}
});
