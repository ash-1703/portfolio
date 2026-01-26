import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '7c4y4qwx',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: false, // Disabled CDN for real-time updates
  perspective: 'published', // Only fetch published documents
  token: undefined, // No token needed for public reads
  
  // Force no caching
  requestTagPrefix: 'sanity',
  ignoreBrowserTokenWarning: true,
})

// Log for debugging
console.log('🔧 Sanity Client Config:', {
  projectId: client.config().projectId,
  dataset: client.config().dataset,
  useCdn: client.config().useCdn,
});
