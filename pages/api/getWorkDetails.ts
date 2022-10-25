import type { NextApiRequest, NextApiResponse } from 'next'
import { worksQueryDetails } from '../../utils/queries'
import { client } from '../../utils/client'
import { Work } from '../../types'

type Data = {
  works: Work
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { slug } = req.query
  const query = worksQueryDetails(slug)
  const works: Work = await client.fetch(query)
  res.status(200).json({ works })
}
