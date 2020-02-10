import React, { useState } from "react";

const Form = props => {
  const [form, setForm] = useState({
    name: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    props.onSubmit(form);
    setForm({ name: "" });
  };

  return (
    <div className="form">
      <h3>Todo Form</h3>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ name: e.target.value })}
        />
        <br />
        <br />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default Form;
