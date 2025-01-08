import type { AstroSelectProperties } from './astro';
import cn from './class-name';
import type { ReactSelectProperties } from './react';
import type { SelectVariantsProperties } from './variants';

export default function properties<T extends AstroSelectProperties | ReactSelectProperties>(
	p?: Omit<SelectVariantsProperties, 'type'> & T
): T {
	if (!p) {
		return {
			className: cn(p),
		} as T;
	}

	const {
		asChild: _asChild,
		class: cls1,
		className: cls2,
		dimension: _dimension,
		intent: _intent,
		...rest
	} = p as AstroSelectProperties & ReactSelectProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
