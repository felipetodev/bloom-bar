import { createClient } from 'contentful'
import { normalizeContentfulData } from '../utils/utils.contentful'

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: 'preview.contentful.com'
})

class ContentfulPages {
  constructor (contentType) {
    this.contentType = contentType
  }

  async getPagesBySlug (slug) {
    const entries = await client.getEntries({
      content_type: this.contentType,
      'fields.slug': slug,
      limit: 1,
      include: 5
    })

    return normalizeContentfulData({ fields: entries.items[0].fields })
  }
}

export default async function cmsApi ({ contentType, slug }) {
  const client = new ContentfulPages(contentType)
  return await client.getPagesBySlug(slug)
}
