import React, { useState } from "react";

const ReadOnlyRows = ({ contact, handleEditClick, handleDeleteClick, handleProfileClick }) => {
  return (
    <tr>
      <td>
            <img  className="profileViewImage" src={contact.avatar} onClick={(event) => handleProfileClick(event)} />
      </td>
      <td>{contact.full_name}</td>
      <td>{contact.description}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <button
          type="button"
          className="userButton"
          onClick={(event) => handleEditClick(event, contact)} //contact is required to get the contact id
        >
          Edit
        </button>
        <button
          type="button"
          className="userButton"
          onClick={() => handleDeleteClick(contact.id)} //which we get from teh contact that we pass the parameters to delete where handleDeleteClck is called
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRows;
