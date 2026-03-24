import js from '@eslint/js';
import globals from 'globals';

/**
 * ESLint flat config.
 * Kept intentionally lightweight so the repo can lint JS as soon as code is added.
 */
export default [
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**'
        ]
    },
    js.configs.recommended,
    {
        languageOptions: {
            ecmaVersion: 2023,
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node
            }
        },
        rules: {
            'indent': ['error', 4, { 'SwitchCase': 1 }],
            'quotes': ['error', 'single', { 'avoidEscape': true }],
            'semi': ['error', 'always'],
            'no-var': 'error',
            'prefer-const': ['error', { 'destructuring': 'all' }]
        }
    }
];
