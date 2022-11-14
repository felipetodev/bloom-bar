import { GET_ALL_MENU_WITH_SLUG, GET_MENU_ENTRY } from './query/menu'

function extractMenuEntries (fetchResponse) {
  return fetchResponse?.data?.menuCollection?.items
}

async function fetchGraphQL (query, preview = false, slug = null) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`
      },
      body: JSON.stringify({
        query,
        ...(slug
          ? {
              variables: { slug }
            }
          : {})
      })
    }
  ).then((response) => response.json())
    .catch(e => console.error(e))
}

export async function getAllMenuSlugs (preview) {
  const entries = await fetchGraphQL(
    `
      query {
        menuCollection {
          items {
            slug
          }
        }
      }
    `,
    preview
  )
  return extractMenuEntries(entries) ?? null
}

export async function getMenuBySlug (preview, slug) {
  const entries = await fetchGraphQL(
    GET_MENU_ENTRY,
    preview,
    slug
  )
  if (entries.errors) {
    console.error({ error: entries.errors?.[0]?.message })
  }
  return extractMenuEntries(entries)
}

export async function getAllMenuData (preview) {
  const entries = await fetchGraphQL(
    GET_ALL_MENU_WITH_SLUG,
    preview
  )
  if (entries.errors) {
    console.error({ error: entries.errors?.[0]?.message })
  }
  return extractMenuEntries(entries) ?? null
}
