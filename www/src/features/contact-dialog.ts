const form = document.getElementById('contact-form') as HTMLFormElement;
const closeButton = document.getElementById('contact-form-close') as HTMLButtonElement;
const error = document.getElementById('contact-form-error') as HTMLSpanElement;
const success = document.getElementById('contact-form-success') as HTMLSpanElement;
const dialog = document.getElementById('contact') as HTMLDialogElement;
function showErrorMessages() {
	error.classList.remove('hidden');
	success.classList.add('hidden');
}
function showSentMessage() {
	error.classList.add('hidden');
	success.classList.remove('hidden');
	form.reset();
}
function closeDialog() {
	error.classList.add('hidden');
	success.classList.add('hidden');
	form.reset();
	dialog.close();
}

function disableFormElements<T extends HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement | HTMLButtonElement>(
	collection: HTMLCollectionOf<T>,
	disabled: boolean
) {
	for (let i = 0; i < collection.length; i++) {
		const item = collection.item(i);
		if (item) {
			item.disabled = disabled;
		}
	}
}

function disableForm(bDisabled: boolean) {
	const inputs = form.getElementsByTagName('input');
	disableFormElements(inputs, bDisabled);
	const selects = form.getElementsByTagName('select');
	disableFormElements(selects, bDisabled);
	const textareas = form.getElementsByTagName('textarea');
	disableFormElements(textareas, bDisabled);
	const buttons = form.getElementsByTagName('button');
	disableFormElements(buttons, bDisabled);
}
async function submitContactForm(e: SubmitEvent) {
	e.preventDefault();
	const formData = new FormData(form);
	const object: Record<string, FormDataEntryValue> = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	try {
		disableForm(true);
		const response = await fetch('http://127.0.0.1:5001/mariomh/europe-west1/sendMailFn', {
			method: 'POST',
			body: JSON.stringify(object),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		if (response.ok) {
			showSentMessage();
		} else {
			showErrorMessages();
		}
	} catch (e) {
		showErrorMessages();
		console.error(e);
	} finally {
		disableForm(false);
	}
}
form.addEventListener('submit', e => void submitContactForm(e));
closeButton.addEventListener('click', closeDialog);
