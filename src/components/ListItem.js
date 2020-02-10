import React from "react";

const ListItem = props => {
  const remove = () => {
    props.onRemove(props.index);
  };

  return (
    <li className="item">
      <p>{props.item.name}</p>
      <button onClick={remove}>remove</button>
    </li>
  );
};

export default ListItem;
