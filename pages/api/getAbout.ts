import type { NextApiRequest, NextApiResponse } from 'next'
import { aboutQuery } from '../../utils/queries'
import { client } from '../../utils/client'
import { About } from '../../types'

type Data = {
  abouts: About[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const query = aboutQuery()
  const abouts: About[] = await client.fetch(query)
  res.status(200).json({ abouts })
}
