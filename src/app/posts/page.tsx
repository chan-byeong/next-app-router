interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const delay = 2000;

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, delay));
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const posts: Post[] = await response.json();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
