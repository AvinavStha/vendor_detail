import React from "react";


const EditableRows = ({
  editFormData,
  handleEditFormChange,
  handleCancelClick,
}) => {
  return (
    <tr>
      <td>
       
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Enter your first name"
          name="full_name"
          value={editFormData.full_name}
          onChange={handleEditFormChange} //to change the values that are changed by the user
        ></input>
      </td>
      <td>
        <input
          type="text"
          required="required"
          placeholder="Describe yourself"
          name="description"
          value={editFormData.description}
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
        <button className="userButton" type="submit">
          Save
        </button>
        <button
          className="userButton"
          type="submit"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRows;
