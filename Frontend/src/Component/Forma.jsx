import React from 'react';

const Forma = () => {
  return (
    <section className="d-flex justify-content-center align-items-center min-vh-100 bg-primary">
      <form className="bg-white p-4 rounded shadow" style={{ maxWidth: '600px', width: '100%' }}>
        <h2 className="text-center">Forma Form</h2>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Your Message</label>
          <textarea
            className="form-control"
            placeholder="Enter your message"
            rows="5"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-purple w-100">
          Send Message
        </button>
      </form>
    </section>
  );
};

export default Forma;