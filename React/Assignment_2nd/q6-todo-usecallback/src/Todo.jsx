import { useCallback, useState } from "react";
import TodoItem from "./TodoItem";

function Todo() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React" },
    { id: 2, text: "Learn Hooks" },
  ]);

  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() === "") return;

    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: Date.now(),
        text: input,
      },
    ]);

    setInput("");
  };

  const deleteTodo = useCallback((id) => {
    setTodos((prevTodos) =>
      prevTodos.filter((todo) => todo.id !== id)
    );
  }, []);


  // Without useCallback, deleteTodo gets recreated on every render.
// React.memo sees a new function reference, so existing TodoItems re-render.
//
// Using prevTodos in setState removes the need to depend on todos,
// so the dependency array can safely stay empty ([]).
  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      <input type="text"  placeholder="Enter Todo"  value={input}
        onChange={(e) => setInput(e.target.value)} />

      <button onClick={addTodo}>Add Todo</button>

      <hr />

      {todos.map((todo) => (

        <TodoItem  key={todo.id}  todo={todo}
          onDelete={deleteTodo}
        />
      ))}
    </div>
  );
}

export default Todo;