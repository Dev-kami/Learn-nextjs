export const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  await new Promise((res) => setTimeout(() => res(0), 1000));

  if (!res.ok) throw new Error("Failed to get users");

  return res.json();
};
