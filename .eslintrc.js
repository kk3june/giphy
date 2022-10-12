module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['prettier', '@typescript-eslint', 'react-hooks'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:@next/next/recommended',
  ],
  rules: {
    semi: ['error', 'always'],
    'prettier/prettier': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
          '**/*.@(spec|test).@(js|ts)?(x)',
          '**/testUtils.tsx',
          '**/jest.setup.ts',
          '**/.storybook/*.@(js|ts)?(x)',
          '**/webpack.*.js',
          '**/script/*.js',
          '**/mocks/**/*.@(js|ts)?(x)',
        ],
      },
    ],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/no-unknown-property': ['error', { ignore: ['css'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx', '.jsx', 'spec.js'] }],
    'react/function-component-definition': 'off',
    'react/no-unescaped-entities': 'off',
    '@next/next/no-page-custom-font': 'off',
    'import/no-duplicates': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-unresolved': [2, { ignore: ['\\.img$'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '[@]common/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'jsx-a11y/label-has-associated-control': ['error', { controlComponents: ['input', 'select'] }],
    'no-param-reassign': 'off',
  },
  settings: {
    // 'import/resolver': {
    //   node: {
    //     extensions: ['.js', '.jsx', '.ts', '.tsx'],
    //   },
    // },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {},
    },
  },
};
