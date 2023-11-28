import logger from 'firebase-functions/logger';

import sendMail from './send-mail.ts';

process.on('unhandledRejection', (reason, p) => {
	logger.error(reason, 'Unhandled rejection at promise', p);
});

// eslint-disable-next-line import/prefer-default-export
export { sendMail };
