import type { AstroCopyrightProperties } from './astro';
import cn from './class-name';
import type { ReactCopyrightProperties } from './react';
import type { CopyrightVariantsProperties } from './variants';

export default function properties<T extends AstroCopyrightProperties | ReactCopyrightProperties>(
	p?: CopyrightVariantsProperties & T
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
		from: _from,
		intent: _intent,
		noSelect: _noSelect,
		to: _to,
		tracking: _tracking,
		variant: _variant,
		weight: _weight,
		...rest
	} = p as AstroCopyrightProperties & ReactCopyrightProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
