import { Slot } from '@radix-ui/react-slot';
import type { FC, RefAttributes } from 'react';

import properties from './properties';
import type { LinkVariantsProperties } from './variants';

interface ReactLinkProperties extends LinkVariantsProperties, RefAttributes<HTMLAnchorElement> {
	asChild?: boolean;
}

const Link: FC<ReactLinkProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : 'a';

	return (
		<Comp
			{...properties(p)}
			ref={ref}
		/>
	);
};

Link.displayName = 'Link';

export type { ReactLinkProperties };

export default Link;
