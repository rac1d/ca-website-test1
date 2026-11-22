import { createClient } from '@sanity/client';

const projectId = import.meta.env.VITE_SANITY_PROJECT_ID;
const dataset = import.meta.env.VITE_SANITY_DATASET;

export function createPublicSanityClient() {
  if (!projectId || !dataset) {
    throw new Error('Set VITE_SANITY_PROJECT_ID and VITE_SANITY_DATASET to enable the Blog.');
  }

  return createClient({
    projectId,
    dataset,
    apiVersion: '2026-03-01',
    perspective: 'published',
    useCdn: true,
  });
}
