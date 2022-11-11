// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getAllMenuData } from '../../contentful/api'

export default async function handler (req, res) {
  const allMenu = (await getAllMenuData()) ?? []
  res.status(200).json(allMenu)
}
