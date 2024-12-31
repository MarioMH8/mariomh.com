import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({});

export type CopyrightVariantsProperties = Partial<FontVariantsProperties> &
	VariantProperties<typeof variants> & {
		from?: string;
		to?: string;
	};

export default variants;
