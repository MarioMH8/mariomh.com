import type { AstroParagraphProperties } from './astro';
import cn from './class-name';
import type { ReactParagraphProperties } from './react';
import type { ParagraphVariantsProperties } from './variants';

export default function properties<T extends AstroParagraphProperties | ReactParagraphProperties>(
	p?: ParagraphVariantsProperties & T
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
		wrap: _wrap,
		...rest
	} = p as AstroParagraphProperties & ReactParagraphProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
