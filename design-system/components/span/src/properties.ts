import type { AstroSpanProperties } from './astro';
import cn from './class-name';
import type { ReactSpanProperties } from './react';
import type { SpanVariantsProperties } from './variants';

export default function properties<T extends AstroSpanProperties | ReactSpanProperties>(
	p?: SpanVariantsProperties & T
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
	} = p as AstroSpanProperties & ReactSpanProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
