import type { AstroLinkProperties } from './astro';
import cn from './class-name';
import type { ReactLinkProperties } from './react';
import type { LinkVariantsProperties } from './variants';

export default function properties<T extends AstroLinkProperties | ReactLinkProperties>(
	p?: LinkVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		align: _align,
		asChild: _asChild,
		bright: _bright,
		class: cls1,
		class: cls2,
		family: _family,
		muted: _muted,
		noSelect: _noSelect,
		size: _size,
		tracking: _tracking,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroLinkProperties & ReactLinkProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
