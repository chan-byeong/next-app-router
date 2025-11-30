const delay = 3000;

export default async function RecentPosts() {
  await new Promise((res) => setTimeout(res, delay));
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  ).then((res) => res.json());

  return (
    <div>
      {posts.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
