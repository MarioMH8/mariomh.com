import { merge } from '@mariomh/cva';
import font from '@mariomh/font/variants';

import type { LabelVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: LabelVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(font(properties), variants({}), ...classLists);
}
