// src/components/TodoForm.jsx
import { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");

  const submit = (e) => {
    e.preventDefault();
    console.log("reached ehre")
    onAdd(title);
    setTitle("");
  };

  return (
    <Form onSubmit={submit} className="mb-3">
      <Form.Control
        value={title}
        placeholder="New todo"
        onChange={e => setTitle(e.target.value)}
      />
      <Button className="mt-2" type="submit">Add</Button>
    </Form>
  );
}
