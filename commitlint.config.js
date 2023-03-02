module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'component',
        'lint',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
}