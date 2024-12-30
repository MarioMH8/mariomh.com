import type { AstroBoxProperties } from './astro';
import cn from './class-name';
import type { ReactBoxProperties } from './react';
import type { BoxVariantsProperties } from './variants';

export default function properties<T extends AstroBoxProperties | ReactBoxProperties>(
	p?: BoxVariantsProperties & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		asChild: _asChild,
		bordered: _bordered,
		bright: _bright,
		class: cls1,
		className: cls2,
		round: _round,
		shadow: _shadow,
		subtle: _subtle,
		transparent: _transparent,
		variant: _variant,
		...rest
	} = p as AstroBoxProperties & ReactBoxProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
