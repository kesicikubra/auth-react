import React from "react";
import { Button, Container } from "react-bootstrap";
import Counter from "../components/counter";
import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<Container className="mt-3">
			<h1>Hello</h1>

			<p>
				<Button as={Link} to="/login">Login</Button>
			</p>

			<Counter />
		</Container>
	);
};

export default HomePage;
