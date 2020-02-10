import React from "react";
import ListItem from "./ListItem";

const List = props => {
  const handleItemRemove = index => {
    props.onItemRemove(index);
  };

  const items = props.items.map((item, index) => (
    <ListItem item={item} index={index} onRemove={handleItemRemove} />
  ));

  return (
    <div className="list">
      <h3>Todo List</h3>
      {items.length ? <ul>{items}</ul> : <p>List is empty.</p>}
    </div>
  );
};

export default List;
