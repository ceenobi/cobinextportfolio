import type { NextApiRequest, NextApiResponse } from 'next'
import { worksQuery } from '../../utils/queries'
import { client } from '../../utils/client'
import { Work } from '../../types'

type Data = {
  works: Work[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = worksQuery()
  const works: Work[] = await client.fetch(query)
  res.status(200).json({ works })
}
