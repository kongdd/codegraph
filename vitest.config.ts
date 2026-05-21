import { defineConfig } from 'vitest/config';

const isWindowsCI = process.platform === 'win32' && process.env.CI === 'true';

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    pool: 'forks',
    poolOptions: {
      forks: isWindowsCI ? { minForks: 1, maxForks: 1 } : {},
    },
    include: ['__tests__/**/*.test.ts'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
  },
});
