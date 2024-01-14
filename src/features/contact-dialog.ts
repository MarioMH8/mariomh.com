import { initializeApp } from '@firebase/app';
import { initializeAppCheck, ReCaptchaEnterpriseProvider } from '@firebase/app-check';
import { getFunctions, httpsCallableFromURL } from '@firebase/functions';

const app = initializeApp({
	apiKey: 'AIzaSyBaY8osi3ih1u6KUnnrN91ReKGC1dCnMeM',
	authDomain: 'mariomh-com.firebaseapp.com',
	projectId: 'mariomh-com',
	storageBucket: 'mariomh-com.appspot.com',
	messagingSenderId: '777228830069',
	appId: '1:777228830069:web:bec62e2a54077a6e997f3c',
});
initializeAppCheck(app, {
	provider: new ReCaptchaEnterpriseProvider('6LcJ7E8pAAAAAIAMPYW5bsJXTzUgRTMycDfcAaii'),
	isTokenAutoRefreshEnabled: true,
});

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
		const functions = getFunctions(app);
		const sendMail = httpsCallableFromURL(
			functions,
			'https://europe-west1-mariomh-com.cloudfunctions.net/mail-send'
		);
		await sendMail(object);
		showSentMessage();
	} catch (e) {
		showErrorMessages();
		console.error(e);
	} finally {
		disableForm(false);
	}
}

form.addEventListener('submit', e => void submitContactForm(e));
closeButton.addEventListener('click', closeDialog);
