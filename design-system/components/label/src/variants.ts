import type { VariantProperties } from '@mariomh/cva';
import cva from '@mariomh/cva';
import type { FontVariantsProperties } from '@mariomh/font/variants';

const variants = cva({});

export type LabelVariantsProperties = Partial<FontVariantsProperties> & VariantProperties<typeof variants>;

export default variants;
