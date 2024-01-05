import React, { useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useStore } from "../../store";
import { userLogin } from "../../store/user/action";
import { useNavigate } from "react-router-dom";
const API_URL = "https://carrental-v3-backend.herokuapp.com";
const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const { dispatchUser } = useStore();
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const payload = {
            email,
            password,
        };
        try {
            const respAuth = await fetch(`${API_URL}/login`, {
                method: "post",
                body: JSON.stringify(payload),
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const dataAuth = await respAuth.json();
            if (!respAuth.ok) throw new Error(dataAuth.message);
            const { token } = dataAuth;
            localStorage.setItem("token", token);
            // token localstorage de şifrelenerek saklanır.
            // bunun için encrypt-storage kütüphanesi kullanılabilir.
            const respUser = await fetch(`${API_URL}/user`,{
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            });
            const data = await respUser.json();
            // Merkezi state e dayı gönder
            dispatchUser(userLogin(data))
            navigate("/")
        } catch (err) {
            alert(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <Form onSubmit={handleLogin}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                    type="email"
                    value={email}
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </Form.Group>
            <Button variant="warning" type="submit" disabled={loading}>
                {loading ? <Spinner size="sm" /> : "Login"}
            </Button>
        </Form>
    );
};
export default LoginForm;