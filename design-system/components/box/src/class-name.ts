import { merge } from '@mariomh/cva';
import roundVariants from '@mariomh/round/variants';
import shadowVariants from '@mariomh/shadow/variants';

import type { BoxVariantsProperties } from './variants';
import variants from './variants';

export default function cn(properties?: BoxVariantsProperties, ...classLists: Parameters<typeof merge>): string {
	return merge(
		roundVariants({ dimension: properties?.round }),
		properties?.shadow ? shadowVariants({ dimension: properties.shadow }) : undefined,
		variants(properties),
		...classLists
	);
}
