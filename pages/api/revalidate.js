export default async function handler (req, res) {
  const route = req.headers['x-contentful-webhook-name']

  if (req.headers['x-secret'] === process.env.REVALIDATE_SECRET) {
    if (route === '/carta') {
      await res.revalidate('/carta/nikkei')
      await res.revalidate('/carta/drinks')

      return res.json({ revalidated: true })
    } else {
      await res.revalidate(route)
      res.status(200).json({ revalidate: true })
    }
  } else {
    return res.status(500).json({ message: 'Error revalidating Contentful' })
  }
}
