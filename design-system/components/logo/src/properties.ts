import type { AstroLogoProperties } from './astro';
import cn from './class-name';
import type { ReactLogoProperties } from './react';
import type { LogoVariantsProperties } from './variants';

export default function properties<T extends AstroLogoProperties | ReactLogoProperties>(
	p?: LogoVariantsProperties & T
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
		isotipo: _isotipo,
		logotipo: _logotipo,
		variant: _variant,
		...rest
	} = p as AstroLogoProperties & ReactLogoProperties;

	return {
		...rest,
		className: cn(p satisfies T, cls1, cls2),
	} as T;
}
