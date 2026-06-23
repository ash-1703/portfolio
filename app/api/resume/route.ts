import { NextRequest } from 'next/server';

const DRIVE_DOWNLOAD = 'https://drive.google.com/uc?export=download&id=1JKFVEI4OrFMcqfxHlVwLdGiOXWG5joiQ';
const DRIVE_VIEW = 'https://drive.google.com/file/d/1JKFVEI4OrFMcqfxHlVwLdGiOXWG5joiQ/view?usp=sharing';

export async function GET(req: NextRequest) {
  try {
    const upstream = await fetch(DRIVE_DOWNLOAD, { method: 'GET' });

    if (!upstream.ok) {
      // Fallback: redirect to Drive view if download endpoint fails
      return new Response(null, { status: 302, headers: { Location: DRIVE_VIEW } });
    }

    const contentType = upstream.headers.get('content-type') || 'application/octet-stream';

    // If Drive returns HTML (possible confirmation page), redirect user to Drive view
    if (contentType.includes('text/html')) {
      return new Response(null, { status: 302, headers: { Location: DRIVE_VIEW } });
    }

    const filename = 'Aishwarya_Tupe_Resume.pdf';

    const headers = new Headers();
    headers.set('Content-Type', contentType);
    headers.set('Content-Disposition', `attachment; filename="${filename}"`);

    // Stream the upstream body back to the client with forced headers
    return new Response(upstream.body, { status: 200, headers });
  } catch (err) {
    return new Response('Failed to download resume', { status: 500 });
  }
}
