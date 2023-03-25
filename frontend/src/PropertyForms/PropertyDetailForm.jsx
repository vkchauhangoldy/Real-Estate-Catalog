import React from "react";
import { Link } from "react-router-dom";
import Button from "../UI/Button/Button";

const PropertyDetailForm = () => {
  return (
    <form action="general-info" className="add-form">
      <section className="form-controls">
        <div className="form-control">
          <label htmlFor="length">Length</label>
          <input
            type="number"
            name="length"
            id="length"
            min="1"
            step="0.01"
            placeholder="Example: 1000"
          />
        </div>
        <div className="form-control">
          <label htmlFor="breadth">Breadth</label>
          <input
            type="number"
            name="breadth"
            id="breadth"
            min="1"
            step="0.01"
            placeholder="Example: 1000"
          />
        </div>
        <div className="form-control">
          <label htmlFor="total_area">Total Area</label>
          <input
            type="number"
            name="total_area"
            id="total_area"
            min="1"
            step="0.01"
            placeholder="Example: 7500"
          />
        </div>
        <div className="form-control">
          <label htmlFor="area_unit">Area Unit</label>
          <select name="area_unit" id="area_unit" placeholder="Area Unit">
            <option value="">Area Unit</option>
            <option value="Square Feet (sq ft)">Square Feet (sq ft)</option>
            <option value="Square Yard">Square Yard</option>
            <option value="Square metre (sq m)">Square metre (sq m)</option>
            <option value="Acre">Acre</option>
            <option value="Hectare">Hectare</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="no_of_bhk">No of BHK</label>
          <select
            name="no_of_bhk"
            id="no_of_bhk"
            placeholder="Select Number of BHK"
          >
            <option value="">Select Number of BHK</option>
            <option value="1 BHK">1 BHK</option>
            <option value="2 BHK">2 BHK</option>
            <option value="3 BHK">3 BHK</option>
            <option value="4 BHK">4 BHK</option>
            <option value="More than 4 BHK">More than 4 BHK</option>
            <option value="--">--</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="number_of_floor">Number of Floor</label>
          <select
            name="number_of_floor"
            id="number_of_floor"
            placeholder="Select Number of Floor"
          >
            <option value="">Select Number of Floor</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="More than 4">More than 4</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="attached">Attached</label>
          <select name="attached" id="attached" placeholder="Select Attached">
            <option value="">Select Attached</option>
            <option value="Attached">Attached</option>
            <option value="Not attached">Not attached</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="western_toilet">Western Toilet</label>
          <select
            name="western_toilet"
            id="western_toilet"
            placeholder="Select Western Toilet"
          >
            <option value="">Select Western Toilet</option>
            <option value="Two-Piece">Two-Piece</option>
            <option value="One-Piece">One-Piece</option>
            <option value="Wall-Hung">Wall-Hung</option>
            <option value="Smart-Toilets">Smart-Toilets</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="furnished">Furnished</label>
          <select
            name="furnished"
            id="furnished"
            placeholder="Select Furnished"
          >
            <option value="">Select Furnished</option>
            <option value="Full furnished">Full furnished</option>
            <option value="Semi furnished">Semi furnished</option>
            <option value="Unfurnished">Unfurnished</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="car_parking">Car Parking</label>
          <select
            name="car_parking"
            id="car_parking"
            placeholder="Select Car Parking"
          >
            <option value="">Select Car Parking</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="lift">Lift</label>
          <select name="lift" id="lift" placeholder="Select Lift">
            <option value="">Select Lift</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>
        <div className="form-control">
          <label htmlFor="electricity">Electricity</label>
          <input
            type="text"
            name="electricity"
            id="electricity"
            placeholder="Example: 3 phase"
          />
        </div>
        <div className="form-control">
          <label htmlFor="facing">Facing</label>
          <select name="facing" id="facing" placeholder="Select Facing">
            <option value="">Select Facing</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
            <option value="North-east">North-east</option>
            <option value="North-west">North-west</option>
            <option value="South-east">South-east</option>
            <option value="South-west">South-west</option>
          </select>
        </div>
      </section>

      <div className="form-actions">
        <Link to="../basic-info">
          <Button className="previous-btn">Previous</Button>
        </Link>
        <Button className="save-btn">Save & Continue</Button>
      </div>
    </form>
  );
};

export default PropertyDetailForm;
