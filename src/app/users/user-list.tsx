export default async function UserList() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();

  return (
    <div>
      {users.map((user: any) => (
        <div key={user.phone}>{user.name}</div>
      ))}
    </div>
  );
}
