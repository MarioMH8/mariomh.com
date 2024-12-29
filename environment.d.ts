/// <reference types="./.astro/types.d.ts" />

declare module '*.astro' {
	const source: string;
	export default source;
}
