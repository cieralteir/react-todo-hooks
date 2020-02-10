import React, { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

const App = () => {
  const [todos, setTodos] = useState([]);

  const handleFormSubmit = todo => {
    setTodos([...todos, todo]);
  };

  const handleListItemRemove = index => {
    setTodos(todos.filter((todo, index_) => index_ !== index));
  };

  return (
    <div className="app">
      <Form onSubmit={handleFormSubmit} />
      <List items={todos} onItemRemove={handleListItemRemove} />
    </div>
  );
};

export default App;
