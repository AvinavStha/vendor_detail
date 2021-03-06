import React from "react";

const VendorProfile = ({ contact }) => {
  return (
    <div>
      <div className="userShowBottom">
        <span className="userShowTitle">Name</span>
        <div className="userShowInfo">
          <span className="userShowInfoTitle">{contact.name}</span>
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
      </div>
    </div>
  );
};

export default VendorProfile;
