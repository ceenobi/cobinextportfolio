import { Work, About, WorkDetail } from '../types'
import { client } from '../utils/client'
import { aboutQuery, worksQuery, worksQueryDetails } from '../utils/queries'

// export const fetchAboutMe = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`)
//   const data = await res.json()
//   const about: About[] = data.about
//   return about
// }
// export const fetchWorks = async () => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorks`)
//   const data = await res.json()
//   const works: Work[] = data.works
//   return works
// }
// export const fetchWorkDetails = async (slug: string) => {
//   const res = await fetch(
//     `${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorkDetails/${slug}`
//   )
//   const data = await res.json()
//   const workDetails: WorkDetail[] = data.works
//   return workDetails
// }

export async function fetchAboutMe() {
  const query = aboutQuery()
  const data = await client.fetch(query)
  return data
}
export async function fetchWorks() {
  const query = worksQuery()
  const data = await client.fetch(query)
  return data
}
export async function fetchWorkDetails(slug: string | string[] | undefined) {
  const query = worksQueryDetails(slug)
  const data = await client.fetch(query)
  return data
}
