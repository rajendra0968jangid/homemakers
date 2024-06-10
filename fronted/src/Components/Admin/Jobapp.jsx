import React, { useState } from 'react';
 // Make sure to create this CSS file for styling

const AdminForm = () => {
  const [form, setForm] = useState({
    jobTitle: '',
    jobLocation: '',
    companyName: '',
    workMode: '',
    jobType: '',
    pay: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted', form);
  };

  return (
    <div className="admin-form-container">
      <h1>Admin Job Form</h1>
      <form onSubmit={handleSubmit} className="admin-form">
        <div className="input-group">
          <label>Job Title</label>
          <input type="text" name="jobTitle" value={form.jobTitle} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Job Location</label>
          <input type="text" name="jobLocation" value={form.jobLocation} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Company Name</label>
          <input type="text" name="companyName" value={form.companyName} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Work Mode</label>
          <input type="text" name="workMode" value={form.workMode} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Type</label>
          <select name="jobType" value={form.jobType} onChange={handleChange} required>
            <option value="">Select...</option>
            <option value="full-time">Full Time</option>
            <option value="part-time">Part Time</option>
          </select>
        </div>
        <div className="input-group">
          <label>Pay</label>
          <input type="text" name="pay" value={form.pay} onChange={handleChange} required />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminForm;
