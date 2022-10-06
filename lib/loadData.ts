import { aboutQuery } from '../utils/queries'
import { worksQuery } from '../utils/queries'
import { worksQueryDetails } from '../utils/queries'
import { client } from '../utils/client'

export async function loadAbouts() {
  const query = aboutQuery()
  const data = await client.fetch(query)
  return data
}
export async function loadWorks() {
  const query = worksQuery()
  const data = await client.fetch(query)
  return data
}
export async function loadWorksDetails(slug: string | string[] | undefined) {
  const query = worksQueryDetails(slug)
  const data = await client.fetch(query)
  return data
}
