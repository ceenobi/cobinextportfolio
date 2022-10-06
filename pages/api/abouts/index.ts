import type { NextApiRequest, NextApiResponse } from 'next'
import { aboutQuery } from '../../../utils/queries'
import { client } from '../../../utils/client'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.setHeader('Cache-Control', 's-maxage=10')
  if (req.method === 'GET') {
    try {
      const query = aboutQuery()
      const data = await client.fetch(query)
      res.status(200).json(data)
    } catch (error) {
      res.status(500).json(error)
    }
  }
}
