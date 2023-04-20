import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "src";

const GovernmentLogin = () => {
  const[data,setData] = useState({
    username:"",
    password:"",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "admin" && password === "password") {
      alert("Login Successful!");
    } else {
      alert("Login Failed. Please try again.");
    }
  };

  const handleChange = (event) =>{
    setData({...data,[event.target.name]: event.target.value});
    console.log(data);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <h1 className="govuk-heading-l">Government Login</h1>
      <FormGroup>
        <Label for="username">Username:</Label>
        <Input
          type="text"
          id="username"
          name="username"
          value={data.username}
          onChange={handleChange}
        />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password:</Label>
        <Input
          type="password"
          id="password"
          name="password"
          value={data.password}
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit" className="govuk-button">
        Submit
      </Button>
    </Form>
  );
};

export default GovernmentLogin;