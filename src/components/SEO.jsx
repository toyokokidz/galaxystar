import Head from 'next/head'

const SEO = ({ 
  title = 'Gravastar - Future of Sound',
  description = 'Experience sci-fi inspired audio like never before with Gravastar speakers and earbuds.',
  image = '/images/og-image.jpg'
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default SEO 