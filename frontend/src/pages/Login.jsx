// src/pages/Login.jsx
import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { authApi } from "../api/api";
import { setToken } from "../auth";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const res = await authApi.login({ email, password });
    setToken(res.token);
    navigate("/");
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={submit}>
        <Form.Control
          className="mb-2"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Control
          className="mb-2"
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
}
