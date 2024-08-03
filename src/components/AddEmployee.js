import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [contact, setContact] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newEmployee = { name, address, contact };
      const response = await axios.post(
        "https://free-ap-south-1.cosmocloud.io/development/api/crud",
        newEmployee,
        {
          headers: {
            projectId: "66aa1f96440310e3620e0930",
            environmentId: "66aa1f96440310e3620e0931",
          },
        }
      );
      const data = response.data;
      console.log(data);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1>Add Employee</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            className="form-control"
            id="address"
            placeholder="line1, city, country, zip code"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="contact">Contact:</label>
          <input
            type="text"
            className="form-control"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter email/phone"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary m-2">
          Add Employee
        </button>
        <button
          type="button"
          className="btn btn-secondary m-2"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </form>
    </div>
  );
}

export default AddEmployee;
