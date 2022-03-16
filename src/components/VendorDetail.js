import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import data from "../mock-data";
import "./vendorDetail.css";
import ReadOnlyRows from "./ReadOnlyRows";
import EditableRows from "./EditableRows";

const VendorDetail = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    //different property for each input from "form"
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  //passing in the object
  const [editFormData, seteditFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
  });

  const [editContactId, seteditContactId] = useState(null); //edit ma xai null auxa if user hasn't edit anything or updated anything

  // enteries made in form which will be updated in table
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name"); //get name attribute which ever the user has typed into
    const fieldValue = event.target.value; //actual value that user has entered

    const newFormData = { ...addFormData }; //spread operator to copy the formdata and assign new data to newFormData
    newFormData[fieldName] = fieldValue; //newFormData is an object that helps to get a given key basically user kei input ma lekheko xa vane tyo value pathaune kam garxa

    setAddFormData(newFormData);
  };

  // esko kam xai naya edit gareko table ko value haru lai feri table ma rakhne kam
  const hadleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue; // jun field ma change gareko xa tyo field ma user le rakheko value add garne

    seteditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault(); //everytime refresh nahos vanera

    const newContact = {
      id: nanoid(), //needed for edit and delete
      first_name: addFormData.first_name,
      last_name: addFormData.last_name,
      email: addFormData.email,
      phone: addFormData.phone,
    };
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  //edit button click garyo vanne k hunxa vanera
  const handleEditClick = (event, contact) => {
    event.preventDefault();
    seteditContactId(contact.id); //seteditContactId is a state object

    const formValues = {
      first_name: contact.first_name,
      last_name: contact.address,
      email: contact.emial,
      phone: contact.phone,
    };

    seteditFormData(formValues);
  };

  return (
    <div className="vendorDetail">
      <div className="table-header">
        <form>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* contacts vanne state object ma gayera tr ko value define garxa ra tesma vako value eta pathaidinxa contact:object */}
              {contacts.map((contact) => (
                <Fragment>
                  {/* can't have two childrens so adding a react fragment*/}
                  {editContactId === contact.id ? (
                    <EditableRows
                      editFormData={editFormData}
                      handleAddFormChange={hadleEditFormChange}
                    />
                  ) : (
                    <ReadOnlyRows
                      contact={contact}
                      handleEditClick={handleEditClick}
                    />
                  )}
                  {/*if the id of the contact oject matches the id sotred in the editContactId then it will change or go to ReadOnlyRows */}
                </Fragment>
                //rendering the tr and tdcomponent from ReadOnlyRows
              ))}
            </tbody>
          </table>
        </form>
      </div>
      <div className="form-header">
        <h1>Form Registration</h1>
        <form onSubmit={handleAddFormSubmit} autoComplete="off">
          <label>First Name</label>
          <input
            type="text"
            name="first_name"
            required="required"
            placeholder="Enter your first name."
            onChange={handleAddFormChange}
          />
          <label>Last Name</label>
          <input
            type="text"
            name="last_name"
            required="required"
            placeholder="Enter your last name."
            onChange={handleAddFormChange}
          />
          <label>Email</label>
          <input
            type="text"
            name="email"
            required="required"
            placeholder="Enter an email..."
            onChange={handleAddFormChange}
          />
          <label>Phone No.</label>
          <input
            type="text"
            name="phone"
            required="required"
            placeholder="Enter your number."
            pattern="^[0-9]{7,10}$"
            onChange={handleAddFormChange}
          />

          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
};
export default VendorDetail;
