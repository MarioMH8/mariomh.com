import type { AstroHeadingProperties } from './astro';
import cn from './class-name';
import type { ReactHeadingProperties } from './react';
import type { HeadingVariantsProperties } from './variants';

export default function properties<T extends AstroHeadingProperties | ReactHeadingProperties>(
	p?: HeadingVariantsProperties & T
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
		family: _family,
		heading: _heading,
		intent: _intent,
		noSelect: _noSelect,
		tracking: _tracking,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroHeadingProperties & ReactHeadingProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
