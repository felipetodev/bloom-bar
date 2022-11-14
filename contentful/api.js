import { GET_CONTACT_ENTRY } from './query/contact'
import { GET_ERROR_ENTRY } from './query/error'
import { GET_HOME_ENTRY } from './query/home'
import { GET_LOCATION_ENTRY } from './query/location'
import { GET_ALL_MENU_WITH_SLUG, GET_MENU_ENTRY } from './query/menu'

function extractMenuEntries (fetchResponse) {
  return fetchResponse?.data?.menuCollection?.items
}

function extractHomeEntries (fetchResponse, slug) {
  const contentTypeId = `${slug}PageCollection`
  return fetchResponse?.data?.[contentTypeId]?.items
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

export async function getPagesBySlug (preview, slug) {
  const pages = {
    home: GET_HOME_ENTRY,
    location: GET_LOCATION_ENTRY,
    contact: GET_CONTACT_ENTRY,
    error: GET_ERROR_ENTRY
  }
  const query = pages[slug]

  const entries = await fetchGraphQL(
    query,
    preview,
    slug
  )

  return extractHomeEntries(entries, slug) ?? null
}
