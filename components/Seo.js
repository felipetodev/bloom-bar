import Head from 'next/head'

import { META } from '../config'

const SeoLayout = ({ children, canonical }) => (
  <>
    <Head>
      <link href={META.favicon} rel='icon' />
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
      <meta content={META.title} property='og:image:alt' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:title' content={META.title} />
      <meta property='twitter:domain' content={META.url} />
      <meta property='twitter:url' content={canonical} />
      <meta name='twitter:description' content={META.description} />
    </Head>
    {children}
  </>
)

export default SeoLayout
