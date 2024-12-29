import { Slot } from '@radix-ui/react-slot';
import type { ComponentPropsWithRef, FC } from 'react';

import properties from './properties';
import type { LinkVariantsProperties } from './variants';

const ELEMENT_TYPE = 'a';

interface ReactLinkProperties extends ComponentPropsWithRef<typeof ELEMENT_TYPE>, LinkVariantsProperties {
	asChild?: boolean;
}

const Link: FC<ReactLinkProperties> = ({ asChild, ref, ...p }) => {
	const Comp = asChild ? Slot : ELEMENT_TYPE;

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
