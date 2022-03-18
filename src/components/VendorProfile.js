import React from "react";

const VendorProfile = () => {
  return (
    <div className="profiles">
      <div className="userShowBottom">
        <span className="userShowTitle">Name</span>
        <div className="userShowInfo">
          <span className="userShowInfoTitle">{contact.full_name}</span>
        </div>
        <span className="userShowTitle">Description</span>
        <div className="userShowInfo">
          <span className="userShowInfoTitle">{contact.description}</span>
        </div>
        <span className="userShowTitle">Email</span>
        <div className="userShowInfo">
          <span className="userShowTitle">{contact.email}</span>
        </div>
        <span className="userShowTitle">Phone Number</span>
        <div className="userShowInfo">
          <span className="userShowInfoTitle">{contact.phone}</span>
        </div>
        <div className="Button">
          <button
            type="button"
            className="userAddButton"
            // onClick={(event) => handleEditClick(event, contact)}
          >
            Edit
          </button>
          <button
            className="userAddButton"
            type="button"
            // onClick={() => handleDeleteClick(contact.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default VendorProfile;
