// src/pages/Dashboard.jsx
import { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { todoApi } from "../api/api";
import { logout } from "../auth";
import TodoForm from "../components/TodoForm";
import TodoItem from "../components/TodoItem";

export default function Dashboard() {
  const [todos, setTodos] = useState([]);

  const loadTodos = async () => {
    const data = await todoApi.getTodos();
    setTodos(data);
  };

  useEffect(() => {
    loadTodos();
  }, []);

  const addTodo = async (title) => {
    console.log("reached here")
    await todoApi.create({ title });
    loadTodos();
  };

  const toggleTodo = async (id) => {
    await todoApi.toggle(id);
    loadTodos();
  };

  const deleteTodo = async (id) => {
    await todoApi.trash(id);
    loadTodos();
  };

  return (
    <Container className="mt-4">
      <Button variant="secondary" onClick={logout}>
        Logout
      </Button>

      <h3 className="mt-3">My Todos</h3>

      <TodoForm onAdd={addTodo} />

      <ul className="list-unstyled">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
          />
        ))}
      </ul>
    </Container>
  );
}
