import logger from 'firebase-functions/logger';
import { onRequest } from 'firebase-functions/v2/https';

import { ALLOWED_ORIGINS, GOOGLE_CLOUD_FUNCTION_REGION, GOOGLE_CLOUD_FUNCTION_SERVICE_ACCOUNT } from './const.ts';
import sendMail from './mail';
import MessageSchema from './mail/schema.ts';

const sendMailFn = onRequest(
	{
		cors: ALLOWED_ORIGINS,
		region: GOOGLE_CLOUD_FUNCTION_REGION,
		serviceAccount: GOOGLE_CLOUD_FUNCTION_SERVICE_ACCOUNT,
	},
	async (request, response) => {
		try {
			if (request.method === 'POST') {
				const payload = MessageSchema.parse(request.body);
				await sendMail(payload);
				response.status(201).send('').end();
			} else {
				response.status(404).send('').end();
			}
		} catch (e) {
			logger.error(e);
			response.status(503).send('').end();
		}
	}
);

export default sendMailFn;
