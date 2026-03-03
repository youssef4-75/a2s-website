import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

export default function JoinUs() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">

          <div className="card shadow-lg border-0 rounded-4">
            <div className="card-body p-5">

              <h2 className="text-center mb-4 fw-bold">
                A2S Registration Form
              </h2>
              <p className="text-center text-muted mb-5">
                Please fill in your profile and academic information
              </p>

              <form>

                {/* PROFILE INFORMATION */}
                <h5 className="fw-bold mb-3">Profile Information</h5>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Full Name</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Password</label>
                    <input type="password" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Date of Birth</label>
                    <input type="date" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      placeholder="+212 6XXXXXXXX"
                    />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Gender</label>
                    <select className="form-select">
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Upload Profile Picture</label>
                    <input type="file" className="form-control" />
                  </div>
                </div>

                <hr className="my-5" />

                {/* STUDENT INFORMATION */}
                <h5 className="fw-bold mb-3">Student Information</h5>
                <div className="row g-3">

                  <div className="col-md-6">
                    <label className="form-label">Student ID</label>
                    <input type="text" className="form-control" />
                  </div>

                  <div className="col-md-6">
                    <label className="form-label">Department</label>
                    <select className="form-select">
                      <option>AMOA</option>
                      <option>GI</option>
                      <option>GRT</option>
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="form-label d-block">Cycle</label>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cycle"
                        value="engineering"
                      />
                      <label className="form-check-label">
                        Engineering
                      </label>
                    </div>

                    <div className="form-check form-check-inline">
                      <input
                        className="form-check-input"
                        type="radio"
                        name="cycle"
                        value="master"
                      />
                      <label className="form-check-label">
                        Master
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label d-block">Skills</label>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">HTML</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">CSS</label>
                    </div>

                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">JavaScript</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <label className="form-label">Additional Notes</label>
                    <textarea
                      className="form-control"
                      rows="4"
                      placeholder="Your message..."
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" />
                      <label className="form-check-label">
                        I accept the terms and conditions
                      </label>
                    </div>
                  </div>
                </div>

                {/* BUTTONS */}
                <div className="d-flex justify-content-between mt-5">
                  <button type="reset" className="btn btn-outline-secondary px-4">
                    Reset
                  </button>

                  <button type="submit" className="btn btn-primary px-4">
                    Register
                  </button>
                </div>

              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}