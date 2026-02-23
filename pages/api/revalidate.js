export default async function handler (req, res) {
  const route = req.headers['x-contentful-webhook-name']

  if (req.headers['x-secret'] === process.env.REVALIDATE_SECRET) {
    if (route === process.env.ROUTE || req.headers['x-secret-route'] === process.env.ROUTE) {
      await Promise.all([
        res.revalidate('/carta/nikkei'),
        res.revalidate('/carta/drinks'),
        res.revalidate('/'),
        res.revalidate('/contacto'),
        res.revalidate('/ubicacion'),
        res.revalidate('/404')
        // await res.revalidate('/rewards')
      ])

      return res.json({ revalidated: true })
    } else {
      await res.revalidate(route)
      res.status(200).json({ revalidate: true })
    }
  } else {
    return res.status(500).json({ message: 'Error revalidating Contentful' })
  }
}
