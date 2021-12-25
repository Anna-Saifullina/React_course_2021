import React, { useState } from "react";
import Input from "./Input";

const Form: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeadPassword, setRepeadPassword] = useState("");

  const handler = () => {
    if (password === repeadPassword) {
      console.log({
        firstName,
        lastName,
        email,
        password,
        repeadPassword,
      });
    } else {
      console.log("Пароли не совпадают");
    }
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setRepeadPassword("");
  };
  return (
    <div>
      <Input
        value={firstName}
        setValue={setFirstName}
        placeholder="Введите имя"
        type="text"
        title="User First Name"
      />
      <Input
        value={lastName}
        setValue={setLastName}
        placeholder="Введите фамилию"
        type="text"
        title="User Last Name"
      />
      <Input
        value={email}
        setValue={setEmail}
        placeholder="Введите почту"
        type="email"
        title="User email"
      />
      <Input
        value={password}
        setValue={setPassword}
        placeholder="Введите пароль"
        type="password"
        title="User Password"
      />
      <Input
        value={repeadPassword}
        setValue={setRepeadPassword}
        placeholder="Повторите пароль"
        type="password"
        title="User repead Password"
      />
      <button onClick={handler} type="button">
        PUSH ME
      </button>
      <button onClick={clearForm} type="button">
        CLEAR FORM
      </button>
    </div>
  );
};

export default Form;
