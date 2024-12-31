import type { AstroBadgeProperties } from './astro';
import cn from './class-name';
import type { ReactBadgeProperties } from './react';
import type { BadgeVariantsProperties } from './variants';

export default function properties<T extends AstroBadgeProperties | ReactBadgeProperties>(
	p?: BadgeVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		asChild: _asChild,
		bordered: _bordered,
		class: cls1,
		className: cls2,
		dimension: _dimension,
		family: _family,
		intent: _intent,
		noSelect: _noSelect,
		shadow: _shadow,
		tracking: _tracking,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroBadgeProperties & ReactBadgeProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
