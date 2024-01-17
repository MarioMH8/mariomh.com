import type { FirebaseApp } from '@firebase/app';

// @ts-expect-error - This is a debug token, it's fine to have it here
self.FIREBASE_APPCHECK_DEBUG_TOKEN = import.meta.env.PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN;

let app: FirebaseApp | undefined = undefined;

async function initializeFirebase() {
	if (app) {
		return;
	}
	const { initializeApp } = await import('@firebase/app');
	const { initializeAppCheck, ReCaptchaV3Provider } = await import('@firebase/app-check');
	app = initializeApp({
		apiKey: import.meta.env.PUBLIC_FIREBASE_API_KEY,
		appId: import.meta.env.PUBLIC_FIREBASE_APP_ID,
		authDomain: import.meta.env.PUBLIC_FIREBASE_AUTH_DOMAIN,
		messagingSenderId: import.meta.env.PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
		storageBucket: import.meta.env.PUBLIC_FIREBASE_STORAGE_BUCKET,
		projectId: import.meta.env.PUBLIC_FIREBASE_PROJECT,
	});
	initializeAppCheck(app, {
		provider: new ReCaptchaV3Provider(import.meta.env.PUBLIC_RECAPTCHA_SITE_KEY),
		isTokenAutoRefreshEnabled: true,
	});
}

const $form = document.getElementById('contact-form') as HTMLFormElement;
const $closeButton = document.getElementById('contact-form-close') as HTMLButtonElement;
const $error = document.getElementById('contact-form-error') as HTMLSpanElement;
const $success = document.getElementById('contact-form-success') as HTMLSpanElement;
const $dialog = document.getElementById('contact') as HTMLDialogElement;
const $buttons = document.querySelectorAll<HTMLButtonElement>('[data-dialog]');

function showErrorMessages() {
	$error.classList.remove('hidden');
	$success.classList.add('hidden');
}

function showSentMessage() {
	$error.classList.add('hidden');
	$success.classList.remove('hidden');
	$form.reset();
}

function closeDialog() {
	$error.classList.add('hidden');
	$success.classList.add('hidden');
	$form.reset();
	$dialog.close();
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
	const inputs = $form.getElementsByTagName('input');
	disableFormElements(inputs, bDisabled);
	const selects = $form.getElementsByTagName('select');
	disableFormElements(selects, bDisabled);
	const textareas = $form.getElementsByTagName('textarea');
	disableFormElements(textareas, bDisabled);
	const buttons = $form.getElementsByTagName('button');
	disableFormElements(buttons, bDisabled);
}

async function submitContactForm(e: SubmitEvent) {
	e.preventDefault();
	const formData = new FormData($form);
	const object: Record<string, FormDataEntryValue> = {};
	formData.forEach((value, key) => {
		object[key] = value;
	});
	const { getFunctions, httpsCallableFromURL } = await import('@firebase/functions');
	try {
		disableForm(true);
		const functions = getFunctions(app);
		const sendMail = httpsCallableFromURL(functions, import.meta.env.PUBLIC_FIREBASE_FUNCTIONS_SEND_MAIL);
		await sendMail(object);
		showSentMessage();
	} catch (e) {
		showErrorMessages();
		console.error(e);
	} finally {
		disableForm(false);
	}
}

$form.addEventListener('submit', e => void submitContactForm(e));
$closeButton.addEventListener('click', closeDialog);
$buttons.forEach(btn => {
	btn.addEventListener('click', () => {
		void initializeFirebase().then(() => $dialog.showModal());
	});
});
