import globals from 'globals';
import pluginJest from 'eslint-plugin-jest';

export default [
  {
    files: ['**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    },
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    rules: {
      'no-unused-vars': 'warn',
      'no-undef': 'error'
    }
  },
  {
    files: ['**/*.test.js', 'tests/**/*.js'],
    plugins: {
      jest: pluginJest
    },
    languageOptions: {
      globals: {
        ...globals.jest
      }
    },
    rules: {
      ...pluginJest.configs.recommended.rules
    }
  }
];
