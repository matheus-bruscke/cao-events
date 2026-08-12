export default {
  '*.{js,jsx,ts,tsx}': [
    'prettier --write',
    () => 'turbo run lint',
    () => 'turbo run test',
  ],
  '*.{json,md,yml}': ['prettier --write'],
}
