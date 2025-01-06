import { merge } from '@mariomh/cva';
import font from '@mariomh/font/variants';

import type { ParagraphVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: ParagraphVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(font(properties), variants(properties), ...classLists);
}
