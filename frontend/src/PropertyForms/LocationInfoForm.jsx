import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button/Button";

const LocationInfoForm = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate("../general-info");
  };
  return (
    <form action="/" className="add-form">
      <section className="form-controls">
        <div className="form-control">
          <label htmlFor="mobile">Email</label>
          <input type="email" name="email" id="email" placeholder="Email" />
        </div>
        <div className="form-control">
          <label htmlFor="city">City</label>
          <input type="text" name="city" id="city" placeholder="City" />
        </div>
        <div className="form-control">
          <label htmlFor="area">Area</label>
          <input type="text" name="area" id="area" placeholder="Area" />
        </div>
        <div className="form-control">
          <label htmlFor="pincode">Pincode</label>
          <input
            type="text"
            name="pincode"
            id="pincode"
            placeholder="Pincode"
          />
        </div>
        <div className="form-control">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Address"
          />
        </div>
        <div className="form-control">
          <label htmlFor="landmark">Landmark</label>
          <input
            type="text"
            name="landmark"
            id="landmark"
            placeholder="Landmark"
          />
        </div>
        <div className="form-control">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="text"
            name="latitude"
            id="latitude"
            placeholder="Latitude"
          />
        </div>
        <div className="form-control">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="text"
            name="longitude"
            id="longitude"
            placeholder="Longitude"
          />
        </div>
      </section>

      <div className="form-actions">
        <Button className="previous-btn" onClick={navigateHandler}>
          Previous
        </Button>
        <Button className="add-btn">Add Property</Button>
      </div>
    </form>
  );
};

export default LocationInfoForm;
