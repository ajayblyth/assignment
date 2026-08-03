import React from "react";

const TodoItem = React.memo(({ todo, onDelete }) => {
  console.log("Rendered :", todo.text);

  return (
    <div
      style={{ marginBottom: "15px",
      }}
    >
      <span>{todo.text}</span>

      <button
        style={{ marginLeft: "15px" }}
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
});

// if we dont use  React.memo, every TodoItem re-renders wheneverthe parent component renders, 
// even if its props never change.

export default TodoItem;