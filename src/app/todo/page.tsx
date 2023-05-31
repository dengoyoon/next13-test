import Link from "next/link";

type Props = {};

type TodoType = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

const fetchTodos = async () => {
  const results = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: TodoType[] = await results.json();
  return todos;
};

async function TodosList({}: Props) {
  const todos: TodoType[] = await fetchTodos();
  //   console.log(todos);
  return (
    <div>
      {todos?.map((todo) => (
        <p key={todo.id} className="text-base">
          <Link href={`/todo/${todo.id}`}>Todo #{todo.id}</Link>
        </p>
      ))}
    </div>
  );
}

export default TodosList;