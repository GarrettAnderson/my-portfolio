import React from "react";

export default function ContactMe() {
  return (
    <form className="needs-validation">
      <div className="row" novalidate>
        <div className="col">
          <input
            type="text"
            className="form-control has-validation"
            placeholder="First name"
            aria-label="First name"
          />
        </div>
        <div className="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
          />
        </div>
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      <div className="col-12">
        <button className="btn btn-primary" type="submit">
          Contact Me
        </button>
      </div>
    </form>
  );
}
