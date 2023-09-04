module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'unused-imports', 'import', 'prettier'],
  extends: [
    'eslint:recommended',
    'next',
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended',
    'prettier'
  ],
  rules: {
    // 模块导入顺序规则
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@/**',
            group: 'external',
            position: 'after'
          }
        ],
        alphabetize: { order: 'asc', caseInsensitive: false },
        'newlines-between': 'always-and-inside-groups',
        warnOnUnassignedImports: true
      }
    ],
    // 自动删除未使用的导入
    // https://github.com/sweepline/eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 1,
    'unused-imports/no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none',
        ignoreRestSiblings: true
      }
    ],
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'import/no-mutable-exports': 'off',
    'prettier/prettier': 'error',
    'no-param-reassign': 'off', // 禁止可以修改参数
    // 'no-var': 'error', // 要求使用 let 或 const 而不是 var
    'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
    'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
    'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
    'no-irregular-whitespace': 'off', // 禁止不规则的空白
    '@typescript-eslint/no-unused-vars': 'error', // 禁止定义未使用的变量
    '@typescript-eslint/no-explicit-any': 'off', // 禁止使用 any 类型
    '@typescript-eslint/ban-ts-ignore': 'off', // 禁止使用 @ts-ignore
    '@typescript-eslint/no-non-null-assertion': 'off' // 不允许使用后缀运算符的非空断言(!)
  }
};
