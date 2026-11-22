import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';

export default defineConfig({
  name: 'ca-consultancy',
  title: 'CA Consultancy CMS',
  projectId: 'l02cglnw',
  dataset: 'production',
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
