import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const schema = yup.object().shape({
	username: yup.string().required("Username is required"),
	password: yup
        .string()
		.required()
		.integer()
		.min(4, "Minimum lenght is 4 characters")
});

function Contact() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("data", data);
	}

	return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control name="username" placeholder="Enter your username" ref={register} />
                {errors.username && <p>{errors.username.message}</p>}
            </Form.Group>

            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" defaultValue="4" placeholder="Enter your password" ref={register} />
                {errors.password && <p>{errors.password.message}</p>}
            </Form.Group>

            <Button type="submit">Submit</Button>
        </Form>
	);
}

export default Contact;