// endspionts: api/posts/posts
const baseUrl = process.env.NEXT_PUBLIC_API_URL

export async function getPosts () {
    const res = await fetch(`${baseUrl}/posts/post`);
    const posts = await res.json();
    return posts; 
}