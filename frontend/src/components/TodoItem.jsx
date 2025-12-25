// src/components/TodoItem.jsx
import { Button } from "react-bootstrap";

export default function TodoItem({ todo, onToggle, onDelete }) {
  return (
    <li className="mb-2">
      <span
        style={{ textDecoration: todo.completed ? "line-through" : "" }}
      >
        {todo.title}
      </span>

      <Button size="sm" className="ms-2" onClick={() => onToggle(todo._id)}>
        Toggle
      </Button>

      <Button
        size="sm"
        variant="danger"
        className="ms-2"
        onClick={() => onDelete(todo._id)}
      >
        Delete
      </Button>
    </li>
  );
}
