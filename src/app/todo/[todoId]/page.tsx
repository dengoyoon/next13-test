type Props = {
  params: {
    todoId: string;
  };
};

type TodoType = {
  userId: string;
  id: string;
  title: string;
  completed: boolean;
};

const fetchTodo = async (todoId: string) => {
  const result = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const todo: TodoType = await result.json();
  return todo;
};

async function TodoId({ params: { todoId } }: Props) {
  const todo = await fetchTodo(todoId);
  return (
    <div>
      <div>Todo Id : {todoId}</div>
      <div>Todo Title : {todo.title}</div>
      <div>
        Completed :{todo.completed ? <span> Yes</span> : <span> No</span>}
      </div>
    </div>
  );
}

export default TodoId;