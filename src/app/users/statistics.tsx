const delay = 5000;

export default async function Statistics() {
  await new Promise((res) => setTimeout(res, delay));
  const statistics = await fetch(
    "https://jsonplaceholder.typicode.com/comments?_limit=1"
  ).then((res) => res.json());

  return <div>{statistics[0].body}</div>;
}
