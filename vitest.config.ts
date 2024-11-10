// vitest.config.ts

async function getConfig() {
  const { defineConfig } = await import('vitest/config');
  return defineConfig({
    test: {
      include: ['*.test.js'],  // Matches all .test.js files in the main directory
    },
  });
}

export default getConfig();