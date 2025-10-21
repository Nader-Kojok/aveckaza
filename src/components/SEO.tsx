import { Helmet } from '@vuer-ai/react-helmet-async'

interface SEOProps {
  readonly title: string
  readonly description: string
  readonly keywords?: string
  readonly ogImage?: string
  readonly ogType?: string
  readonly canonical?: string
  readonly noindex?: boolean
  readonly structuredData?: object
}

export default function Seo({
  title,
  description,
  keywords = 'services à domicile Dakar, femme de ménage Sénégal, bricolage Dakar, jardinage Dakar, aide ménagère, Kaza Sénégal',
  ogImage = '/logo_kaza.png',
  ogType = 'website',
  canonical,
  noindex = false,
  structuredData
}: Readonly<SEOProps>) {
  const siteName = 'Kaza Sénégal'
  const siteUrl = 'https://aveckaza.com'
  const fullTitle = `${title} | ${siteName}`
  const fullUrl = canonical ? `${siteUrl}${canonical}` : siteUrl
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {canonical && <link rel="canonical" href={fullUrl} />}
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="fr_SN" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={fullTitle} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="author" content="Kaza Sénégal" />
      <meta name="language" content="French" />
      <meta name="geo.region" content="SN-DK" />
      <meta name="geo.placename" content="Dakar" />
      <meta name="geo.position" content="14.6928;-17.4467" />
      <meta name="ICBM" content="14.6928, -17.4467" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
