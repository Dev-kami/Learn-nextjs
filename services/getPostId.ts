export async function getPostId(postId: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  // await new Promise((res) => setTimeout(() => res(0), 1000));

  if (!res.ok) throw new Error("Failed to fetch this post");

  return res.json();
}
