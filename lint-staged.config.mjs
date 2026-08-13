export default {
  '*.{js,jsx,ts,tsx}': ['prettier --write', () => 'turbo run lint'],
  '*.{json,md,yml}': ['prettier --write'],
}
