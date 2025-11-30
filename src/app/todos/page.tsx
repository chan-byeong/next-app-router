"use client";

import { use, useEffect, useState } from "react";

interface Todo {
  userId: number;
  id: number;
  title: string;
  complete: boolean;
}

const delay = 2000;

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>();

  useEffect(() => {
    const fecthData = async () => {
      await new Promise((resolve) => setTimeout(resolve, delay));
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos`
      );
      const todos = await response.json();

      setTodos(todos);
    };

    fecthData();
  }, []);

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
