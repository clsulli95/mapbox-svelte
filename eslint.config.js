import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import { includeIgnoreFile } from '@eslint/compat';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';
import svelteConfig from './svelte.config.js';

const gitignorePath = fileURLToPath(new URL('./.gitignore', import.meta.url));

export default ts.config(
	includeIgnoreFile(gitignorePath),
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs.recommended,
	prettier,
	...svelte.configs.prettier,
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node }
		},
		rules: {
			'no-undef': 'off',
			'svelte3/a11y-label-has-associated-control': 'off',
			'svelte3/a11y-aria-attrs': 'off',
			'svelte3/a11y-aria-props': 'off',
			'svelte3/a11y-aria-roles': 'off',
			'svelte3/a11y-click-events-have-key-events': 'off',
			'svelte3/a11y-img-redundant-alt': 'off',
			'svelte3/a11y-media-has-caption': 'off',
			'svelte3/a11y-missing-attribute': 'off',
			'svelte3/a11y-missing-content': 'off',
			'svelte3/a11y-role-has-required-aria-props': 'off',
			'svelte3/a11y-tabindex-no-positive': 'off',
			'svelte3/a11y-no-onchange': 'off',
			'svelte3/a11y-no-autofocus': 'off'
		}
	},
	{
		files: ['**/*.svelte', '**/*.svelte.ts', '**/*.svelte.js'],
		ignores: ['eslint.config.js', 'svelte.config.js'],
		languageOptions: {
			parserOptions: {
				projectService: true,
				extraFileExtensions: ['.svelte'],
				parser: ts.parser,
				svelteConfig
			}
		}
	}
);
