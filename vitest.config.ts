// vitest.config.ts

async function getConfig() {
  const { defineConfig } = await import('vitest/config');
  return defineConfig({
    test: {
      includeSource: ['*.{js, ts}', '**/*.mts'],
    },
    define: {
      'import.meta.vitest': 'undefined',
    },
  });
}

export default getConfig();