import React from "react";

const EditableRows = ({ editFormData, handleEditFormChange }) => {
  return (
    <tr>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your first name"
          name="first_name"
          value={editFormData.first_name}
          onChange={handleEditFormChange} //to change the values that are changed by the user
        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter your last name"
          name="last_name"
          value={editFormData.last_name}
          onChange={handleEditFormChange}

        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter your email"
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}

        ></input>
      </td>
      <td>
      <input
          type="text"
          required="required"
          placeholder="Enter your phone number"
          name="phone"
          value={editFormData.phone}
          onChange={handleEditFormChange}

        ></input>
      </td>
      <td>
          <button type="submit">Save</button>
      </td>
    </tr>
  );
};

export default EditableRows;
