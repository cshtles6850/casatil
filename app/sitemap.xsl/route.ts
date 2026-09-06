export function GET() {
  const xsl = `<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:xhtml="http://www.w3.org/1999/xhtml">
  <xsl:output method="html" encoding="UTF-8" />
  <xsl:template match="/">
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>Cappadocia Airport Shuttle Sitemap</title>
        <style>
          body{font-family:Arial,sans-serif;margin:0;background:#f6f8fb;color:#1f2937}
          main{max-width:1180px;margin:36px auto;padding:0 20px}
          h1{font-size:28px;margin:0 0 8px}
          p{color:#667085;margin:0 0 24px;line-height:1.55}
          .card{background:#fff;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;box-shadow:0 8px 30px rgba(15,23,42,.05)}
          table{width:100%;border-collapse:collapse;font-size:14px}
          th,td{padding:12px 14px;border-bottom:1px solid #eef0f3;text-align:left;vertical-align:top}
          th{background:#f8fafc;font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#475467}
          tr:last-child td{border-bottom:0}
          a{color:#4051b5;text-decoration:none;overflow-wrap:anywhere}
          .alt{font-size:12px;line-height:1.5;color:#667085}
          .pill{display:inline-block;padding:3px 7px;border-radius:999px;background:#eef2ff;color:#4652a6;font-size:11px;font-weight:700;margin:0 4px 4px 0}
          @media(max-width:760px){main{margin:22px auto;padding:0 12px}.hide-mobile{display:none}th,td{padding:10px 9px;font-size:12px}}
        </style>
      </head>
      <body>
        <main>
          <h1>Cappadocia Airport Shuttle Sitemap</h1>
          <p>This is the XML sitemap used by search engines. The table below is only a human-friendly view; the underlying sitemap remains standards-compliant XML.</p>
          <div class="card">
            <table>
              <thead>
                <tr><th>URL</th><th>Change</th><th>Priority</th><th class="hide-mobile">Language alternates</th></tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td><a href="{s:loc}"><xsl:value-of select="s:loc" /></a></td>
                    <td><xsl:value-of select="s:changefreq" /></td>
                    <td><xsl:value-of select="s:priority" /></td>
                    <td class="hide-mobile alt">
                      <xsl:for-each select="xhtml:link">
                        <span class="pill"><xsl:value-of select="@hreflang" /></span>
                      </xsl:for-each>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>`;

  return new Response(xsl, {
    headers: {
      'Content-Type': 'application/xslt+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400',
    },
  });
}
