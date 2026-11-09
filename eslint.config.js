import hexadrop from '@hexadrop/eslint-config';

export default await hexadrop({
	rules: {
		'import/no-unresolved': 'off',
	},
	settings: {
		'import-x/parsers': {
			'@typescript-eslint/parser': ['.cjs', '.js', '.mjs'],
		},
	},
	typescript: ['./tsconfig.json'],
});
