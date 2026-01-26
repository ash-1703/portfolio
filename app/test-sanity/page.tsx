// Quick test to verify Sanity connection
import { client } from '@/lib/sanity.client';

export default async function TestSanityPage() {
  // Test 1: Check all document types
  const allTypes = await client.fetch(`
    array::unique(*[]._type)
  `);

  // Test 2: Check publicHealthLearning documents
  const publicHealthDocs = await client.fetch(`
    *[_type == "publicHealthLearning"] {
      _id,
      _type,
      title,
      "hasSlug": defined(slug),
      "slugValue": slug.current,
      date,
      _updatedAt
    }
  `);

  // Test 3: Check ALL documents
  const allDocs = await client.fetch(`
    *[] {
      _id,
      _type,
      title
    }
  `);

  console.log('🔍 ALL DOCUMENT TYPES:', allTypes);
  console.log('📘 PUBLIC HEALTH DOCS:', publicHealthDocs);
  console.log('📄 ALL DOCUMENTS:', allDocs);

  return (
    <div style={{ padding: '40px', fontFamily: 'monospace' }}>
      <h1>Sanity Connection Test</h1>
      
      <div style={{ marginTop: '20px', padding: '20px', background: '#f5f5f5' }}>
        <h2>All Document Types Found:</h2>
        <pre>{JSON.stringify(allTypes, null, 2)}</pre>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', background: '#e3f2fd' }}>
        <h2>Public Health Learning Documents:</h2>
        <pre>{JSON.stringify(publicHealthDocs, null, 2)}</pre>
        <p><strong>Total: {publicHealthDocs.length}</strong></p>
      </div>

      <div style={{ marginTop: '20px', padding: '20px', background: '#fff3e0' }}>
        <h2>All Documents in Sanity:</h2>
        <pre>{JSON.stringify(allDocs, null, 2)}</pre>
        <p><strong>Total: {allDocs.length}</strong></p>
      </div>
    </div>
  );
}
