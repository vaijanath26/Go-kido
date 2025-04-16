import React, { useState } from "react";
import "./SignupPage.css"; // External CSS file
import logo from '../assets/logo-sticky.svg'; // adjust path as needed




const SignupPage = () => {
  const [formData, setFormData] = useState({
    salutation: "Lord",
    forename: "",
    surname: "",
    email: "",
    mobile: "",
    street: "",
    houseNumber: "",
    deliveryArea: "Dornbusch-60320",
    floor: "",
    doorbellName: "",
    password: "",
    confirmPassword: "",
    termsAccepted: false,
    newsletter: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    // Validation and backend logic here
  };

  return (
    <div className="signup-container">
      <div className="form-section">
        <img src={logo}  alt="Logo" className="logo" />
        <form onSubmit={handleSubmit}>
          <label>Salutation</label>
          <select name="salutation" value={formData.salutation} onChange={handleChange}>
            <option>Lord</option>
            <option>Mr</option>
            <option>Ms</option>
          </select>

          <input name="forename" placeholder="Forename" value={formData.forename} onChange={handleChange} />
          <input name="surname" placeholder="Family Name" value={formData.surname} onChange={handleChange} />
          <input type="email" name="email" placeholder="Mail e.g.: muster@domain.de" value={formData.email} onChange={handleChange} />
          <input name="mobile" placeholder="Mobile number" value={formData.mobile} onChange={handleChange} />
          <input name="street" placeholder="Street without house number" value={formData.street} onChange={handleChange} />
          <input name="houseNumber" placeholder="House number e.g.: 15, 100 b, 35C..." value={formData.houseNumber} onChange={handleChange} />
          <select name="deliveryArea" value={formData.deliveryArea} onChange={handleChange}>
            <option>Dornbusch-60320</option>
          </select>
          <input name="floor" placeholder="Floor" value={formData.floor} onChange={handleChange} />
          <input name="doorbellName" placeholder="Company or name on the doorbell" value={formData.doorbellName} onChange={handleChange} />
          <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
          <input type="password" name="confirmPassword" placeholder="Confirm password" value={formData.confirmPassword} onChange={handleChange} />

          <div className="checkbox-group">
            <input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange} />
            <label>Accept terms and conditions</label>
          </div>

          <div className="checkbox-group">
            <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
            <label>Subscribe to our newsletter</label>
          </div>

          <button type="submit">Create an account</button>

          <p className="signin-link">Already have an account? <a href="#">Sign in</a></p>
        </form>
      </div>

      <div className="image-section">
        <img src="https://images.unsplash.com/photo-1516321497487-e288fb19713f" alt="Laptop" />
      </div>
    </div>
  );
};

export default SignupPage;
