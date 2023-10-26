import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId:'ltsg79ex',
    dataset:'production',
    apiVersion:'2023-10-21',
    useCdn:true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,

})

export async function getPosts(){
    const posts = await client.fetch('*[_type == "post"]')
    return posts
}

export async function updateDocumentTitle(_id, title) {
    const result = client.patch(_id).set({title})
    return result
  }

export const builder = imageUrlBuilder(client)
export default function urlFor(source){
    return builder.image(source)
}
