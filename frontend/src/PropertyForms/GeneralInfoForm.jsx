import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const GeneralInfoForm = () => {
  return (
    <form action="location-info" className="add-form">
      <section className="form-controls">
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <select name="name" id="name" placeholder="Owner">
            <option value="">Owner</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="mobile">Mobile</label>
          <input
            type="number"
            name="mobile"
            id="mobile"
            placeholder="Enter Mobile Number"
          />
        </div>
        <div className="form-control">
          <label htmlFor="posted_by">Posted By</label>
          <select name="posted_by" id="posted_by" placeholder="Posted By">
            <option value="">Posted By</option>
            <option value="Owner">Owner</option>
            <option value="Broker">Broker</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="sales_unit">Sales Unit</label>
          <input
            type="number"
            name="sales_unit"
            id="sales_unit"
            min="1"
            step="1"
            placeholder="Number of sales unit"
          />
        </div>
        <div className="form-control">
          <label htmlFor="featured_package">Featured Package</label>
          <input
            type="number"
            name="featured_package"
            id="featured_package"
            min="1000"
            step="100"
            placeholder="Example: 100000"
          />
        </div>
        <div className="form-control">
          <label htmlFor="ppd_package">PPD Package</label>
          <input
            type="number"
            name="ppd_package"
            id="ppd_package"
            min="1000"
            step="100"
            placeholder="Example: 100000"
          />
        </div>
      </section>

      <div className="form-actions">
        <Link to="../property-detail">
          <Button className="previous-btn">Previous</Button>
        </Link>
        <Button className="save-btn">Save & Continue</Button>
      </div>
    </form>
  );
};

export default GeneralInfoForm;
