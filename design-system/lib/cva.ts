import { defineConfig } from 'cva';
import { twMerge as merge } from 'tailwind-merge';

const { compose, cva, cx } = defineConfig({
	hooks: {
		onComplete: className => merge(className),
	},
});

export { compose, cx };

export type { VariantProps as VariantProperties } from 'cva';
export { twMerge as merge } from 'tailwind-merge';

export default cva;
