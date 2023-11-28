import nodemailer from 'nodemailer';

import { GMAIL_ACCOUNT, GMAIL_PASSWORD } from '../const.ts';
import type { MessagePayload } from './schema.ts';

const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: GMAIL_ACCOUNT,
		pass: GMAIL_PASSWORD,
	},
});

export default async function sendMail(payload: MessagePayload): Promise<void> {
	await transporter.sendMail({
		to: GMAIL_ACCOUNT,
		replyTo: payload.email,
		subject: `mariomh.com: ${payload.name} te ha enviado un mensaje`,
		html: `
			<h1>${payload.name}</h1>
			<p>${payload.message}</p>
		`,
	});
}
