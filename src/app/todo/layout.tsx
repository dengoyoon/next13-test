import React from "react";
import TodoList from "./TodoList";

type Props = {
  children: React.ReactNode;
};

function TodoLayout({ children }: Props) {
  return (
    <div style={{display: "flex"}}>
      {/* @ts-ignore */}
      <TodoList />
      <div>{children}</div>
    </div>
  );
}

export default TodoLayout;