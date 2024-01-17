export async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60, // 1 minute
    },
  });

  await new Promise((res) => setTimeout(() => res(0), 1000));

  if (!res.ok) throw new Error("Failed to fetch Posts");

  return res.json();
}
