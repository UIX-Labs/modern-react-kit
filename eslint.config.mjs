import antfu from '@antfu/eslint-config'
import perfectionist from 'eslint-plugin-perfectionist'

export default antfu({
  ignores: ['dist', '.tanstack', 'src/app/routeTree.gen.ts'],
  react: true,
  rules: {
    'import/order': 'off',
    ...perfectionist.configs['recommended-natural'].rules,
  },
  stylistic: {
    indent: 2,
    overrides: {
      'sort-imports': 'off',
      'style/jsx-quotes': 'off',
      'style/no-trailing-spaces': 'off',
    },
    quotes: 'single',
    semi: false,
  },
  typescript: true,
})
