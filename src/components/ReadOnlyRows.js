import React from "react";

const ReadOnlyRows = ({ contact, handleEditClick }) => {
  return (
    <tr>
      <td>{contact.first_name}</td>
      <td>{contact.last_name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button
          type="button"
          onClick={ (event) => handleEditClick(event, contact) } //contact is required to get the contact id
        >Edit</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
