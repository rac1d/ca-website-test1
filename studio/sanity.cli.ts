import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: { projectId: 'l02cglnw', dataset: 'production' },
  vite: {
    css: { postcss: { plugins: [] } },
  },
});
