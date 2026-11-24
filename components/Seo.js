import Head from 'next/head'

import { META } from '../config'

const SeoLayout = ({ children, canonical }) => {
  const imageUrl = new URL(META.image.src, canonical).href
  const siteUrl = new URL('/', canonical).href

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BarOrPub',
    name: META.title,
    description: META.description,
    url: siteUrl,
    image: imageUrl,
    servesCuisine: 'Nikkei',
    address: { '@type': 'PostalAddress', ...META.address }
  }

  return (
    <>
      <Head>
        <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' />
        <link href={META.favicon} rel='icon' type='image/png' sizes='100x100' />
        <link href='/site.webmanifest' rel='manifest' />
        <link href={META.appleicon} rel='apple-touch-icon' />
        <link href={canonical} rel='canonical' />
        <title>{META.title}</title>
        <meta content={META.theme} name='theme-color' />
        <meta content={META.description} name='description' />
        <meta content={META.keywords} name='keywords' />
        <meta content={META.author} name='author' />
        <meta content={META.author} property='og:site_name' />
        <meta content={canonical} property='og:url' />
        <meta content='website' property='og:type' />
        <meta content={META.title} property='og:title' />
        <meta content={META.description} property='og:description' />
        <meta content={META.locale} property='og:locale' />
        <meta content={imageUrl} property='og:image' />
        <meta content={imageUrl} property='og:image:secure_url' />
        <meta content={META.image.type} property='og:image:type' />
        <meta content={String(META.image.width)} property='og:image:width' />
        <meta content={String(META.image.height)} property='og:image:height' />
        <meta content={META.image.alt} property='og:image:alt' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={META.title} />
        <meta property='twitter:domain' content={META.url} />
        <meta property='twitter:url' content={canonical} />
        <meta name='twitter:description' content={META.description} />
        <meta name='twitter:image' content={imageUrl} />
        <meta name='twitter:image:alt' content={META.image.alt} />
        <script key='ld-json' type='application/ld+json' dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </Head>
      {children}
    </>
  )
}

export default SeoLayout
