import type { AstroLabelProperties } from './astro';
import cn from './class-name';
import type { ReactLabelProperties } from './react';
import type { LabelVariantsProperties } from './variants';

export default function properties<T extends AstroLabelProperties | ReactLabelProperties>(
	p?: LabelVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		align: _align,
		asChild: _asChild,
		class: cls1,
		className: cls2,
		dimension: _dimension,
		family: _family,
		intent: _intent,
		noSelect: _noSelect,
		tracking: _tracking,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroLabelProperties & ReactLabelProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
