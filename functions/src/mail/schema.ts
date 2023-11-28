import type { infer as inferType } from 'zod';
import { z } from 'zod';

const MessageSchema = z.object({
	name: z.string(),
	email: z.string().email(),
	message: z.string().max(1000),
});

export type MessagePayload = inferType<typeof MessageSchema>;

export default MessageSchema;
