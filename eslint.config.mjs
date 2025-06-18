import antfu from '@antfu/eslint-config'

export default antfu({
  stylistic: {
    semi: false,
    indent: 2,
    quotes: 'single',
    overrides: {
      'style/no-trailing-spaces': 'off',
      'style/jsx-quotes': 'off',
    },
  },
  react: true,
  typescript: true,
  ignores: ['dist', '.tanstack', 'routeTree.gen.ts'],
})
