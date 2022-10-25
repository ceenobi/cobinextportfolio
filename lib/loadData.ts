import { Work, About } from '../types'

export const fetchAboutMe = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getAbout`)
  const data = await res.json()
  const about: About[] = data.about
  return about
}
export const fetchWorks = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorks`)
  const data = await res.json()
  const works: Work[] = data.works
  return works
}
export const fetchWorkDetails = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getWorkDetails`
  )
  const data = await res.json()
  const workDetails: Work[] = data.workDetails
  return workDetails
}

// export async function loadAbouts() {
//   const query = aboutQuery()
//   const data = await client.fetch(query)
//   return data
// }
// export async function loadWorks() {
//   const query = worksQuery()
//   const data = await client.fetch(query)
//   return data
// }
// export async function loadWorksDetails(slug: string | string[] | undefined) {
//   const query = worksQueryDetails(slug)
//   const data = await client.fetch(query)
//   return data
// }
