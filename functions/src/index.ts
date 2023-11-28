import logger from 'firebase-functions/logger';

import sendMailFn from './send-mail.fn.ts';

process.on('unhandledRejection', (reason, p) => {
	logger.error(reason, 'Unhandled rejection at promise', p);
});

// eslint-disable-next-line import/prefer-default-export
export { sendMailFn };
