import noRelativeImportPaths from 'eslint-plugin-no-relative-import-paths';
import nextConfig from 'eslint-config-next';
import globals from 'globals';
import prettier from 'eslint-config-prettier';


const eslintConfig = [
  ...nextConfig,
  prettier,
  {
    plugins: {
      'no-relative-import-paths': noRelativeImportPaths,
    },

    linterOptions: {
      reportUnusedDisableDirectives: true,
    },

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },

    rules: {
      '@typescript-eslint/camelcase': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      'jsx-a11y/no-noninteractive-tabindex': 'off',
      'arrow-parens': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      'no-unused-vars': 'off',

      'jsx-a11y/no-onchange': 'off',

      'no-relative-import-paths/no-relative-import-paths': [
        'error',
        {
          allowSameFolder: true,
        },
      ],

      // Restored accessibility rules
      'jsx-a11y/no-noninteractive-element-interactions': 'warn',
      'jsx-a11y/label-has-associated-control': 'warn',
    },
  },
];

export default eslintConfig;
