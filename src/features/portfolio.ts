const allProjects: HTMLElement[] = [];
let showProjects = [];
const maxShow = 8;
const defaultShow = 4;

let show = defaultShow;
let showCount = defaultShow;
let actualShow: string | undefined = undefined;

const buttons = document.querySelectorAll<HTMLButtonElement>('.portfolio-btn');
const showMore = document.getElementById('show-more') as HTMLButtonElement;
document.querySelectorAll<HTMLElement>('.portfolio-preview').forEach(el => {
	allProjects.push(el);
});
showProjects = allProjects;

function toggleClass(cls: string) {
	let activeClass = '';
	buttons.forEach(btn => {
		if (btn.className === cls) {
			return;
		}
		activeClass = btn.className;
		btn.className = cls;
	});

	return activeClass;
}

function toggleShowMore() {
	if (showProjects.length <= show) {
		showMore.classList.add('hidden');
	} else {
		showMore.classList.remove('hidden');
	}
}

function showAll() {
	allProjects.forEach((project, i) => {
		if (i < show) {
			project.classList.remove('hidden');
		} else {
			project.classList.add('hidden');
		}
	});
	showCount = show;
	showProjects = allProjects;
	showMore.classList.remove('hidden');
}

function showType(type: string) {
	showCount = 0;
	showProjects = allProjects.filter(project => project.dataset.type === type);
	allProjects.forEach(project => {
		if (project.dataset.type === type) {
			showCount++;
			if (showCount <= show) {
				project.classList.remove('hidden');
			} else {
				project.classList.add('hidden');
			}
		} else {
			project.classList.add('hidden');
		}
	});
}

function renderProjects() {
	if (actualShow) {
		showType(actualShow);
	} else {
		showAll();
	}
}

showMore.addEventListener('click', () => {
	show = show === maxShow ? defaultShow : maxShow;
	if (show === maxShow) {
		showMore.textContent = 'Ver menos';
	} else {
		showMore.textContent = 'Ver más';
	}
	renderProjects();
});
buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		actualShow = btn.dataset.show;
		show = defaultShow;
		showMore.textContent = 'Ver más';
		btn.className = toggleClass(btn.className);
		renderProjects();
		toggleShowMore();
	});
});
