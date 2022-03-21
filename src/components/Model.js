import React from "react";
import {Close} from "@material-ui/icons";

export const Model = (contact) => {
  return (
    <div>
      <div className="userShowBottom">
        <button style={{background:'transparent', align_item: 'left'}}><Close/></button>
        <img src={contact.avatar} className="userShowImage"/>
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
