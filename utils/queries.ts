export const aboutQuery = () => {
  const query = `*[_type == "abouts"] | order(title){
 _id,
     description,
     title,
     experience,
     skills,
     thissite
  }`
  return query
}
export const worksQuery = () => {
  const query = `*[_type == "works"] | order(title){
    _id,
    title,
    project,
    slug
  }`
  return query
}
export const worksQueryDetails = (slug: string | string[] | undefined) => {
  const query = `*[_type == "works" && slug == '${slug}'] | order(title){
    _id,
    title,
    project,
    slug,
    description,
    descriptionB,
    descriptionC,
    headline,
    role[],
    responsibilities,
    projectLink,
    codeLink,
    tags[],
    cloudinaryList[]{
        secure_url
    }
  }`
  return query
}
