import React from "react";
import "./Form.css";
import Button from "../UI/Button/Button";
import { Link } from "react-router-dom";

const BasicInfoForm = () => {
  return (
    <form action="property-detail" className="add-form">
      <section className="form-controls">
        <div className="form-control">
          <label htmlFor="property_type">Property Type</label>
          <select
            name="property_type"
            id="property_type"
            placeholder="Select Property Type"
          >
            <option value="">Select Property Type</option>
            <option value="Flat">Flat</option>
            <option value="Plot">Plot</option>
            <option value="Apartment">Apartment</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="negotiable">Negotiable</label>
          <select
            name="negotiable"
            id="negotiable"
            placeholder="Select Negotiable"
          >
            <option value="">Select Negotiable</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            min="1"
            step="1"
            placeholder="Example: 10000"
          />
        </div>
        <div className="form-control">
          <label htmlFor="ownership">Ownership</label>
          <select
            name="ownership"
            id="ownership"
            placeholder="Select Ownership"
          >
            <option value="">Select Ownership</option>
            <option value="Single Ownership">Single Ownership</option>
            <option value="Joint Ownership">Joint Ownership</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="property_age">Property Age</label>
          <select
            name="property_age"
            id="property_age"
            placeholder="Select Property Age"
          >
            <option value="">Select Property Age</option>
            <option value="Less than 5 years">Less than 5 years</option>
            <option value="5 - 10 years">5 - 10 years</option>
            <option value="10 - 20 years">10 - 20 years</option>
            <option value="More than 20 years">More than 20 years</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="property_approved">Property Approved</label>
          <select
            name="property_approved"
            id="property_approved"
            placeholder="Property Approved"
          >
            <option value="">Property Approved</option>
            <option value="Approved">Approved</option>
            <option value="Not Approved">Not Approved</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="property_description">Property Description</label>
          <input
            type="text"
            name="property_description"
            id="property_description"
            placeholder="Write some description...."
          />
        </div>
        <div className="form-control">
          <label htmlFor="bank_loan">Bank Loan</label>
          <select name="bank_loan" id="bank_loan" placeholder="Bank Loan">
            <option value="">Bank Loan</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
      </section>
      <div className="form-actions">
        <Link to="/">
          <Button className="cancel-btn">Cancel</Button>
        </Link>
        <Button className="save-btn">Save & Continue</Button>
      </div>
    </form>
  );
};

export default BasicInfoForm;
