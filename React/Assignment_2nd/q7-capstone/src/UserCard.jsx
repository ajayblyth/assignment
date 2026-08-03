import React, { useRef } from "react";

const UserCard = React.memo(({ user, selected, onSelect }) => {
  const renderCount = useRef(0);

  renderCount.current++;

  console.log(`${user.name} rendered ${renderCount.current} times`);

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "15px",
        width: "220px",
      }}
    >
      <h3>{user.name}</h3>

      <p>Email : {user.email}</p>

      <p>Company : {user.company.name}</p>

      <button onClick={() => onSelect(user.id)}>
        {selected ? "Selected" : "Select"}
      </button>
    </div>
  );
});

// when we remove React.memo that  causes every UserCard
// to re-render with the UserSearch render.

export default UserCard;