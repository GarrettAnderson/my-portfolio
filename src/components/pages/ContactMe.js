import React from "react";
import { useState } from "react";

export default function ContactMe() {
  const [mouseOut, setMouseOut] = useState("false");

  const moveMouseOut = () => {
    setMouseOut(true);
  };

  return (
    <form className="needs-validation">
      <div className="row" novalidate>
        <div className="col">
          <input
            type="text"
            className="form-control has-validation"
            placeholder="First name"
            aria-label="First name"
            required
          />
        </div>
        <div className="col">
          <input
            type="text"
            class="form-control"
            placeholder="Last name"
            aria-label="Last name"
            required
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
          required
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
          required
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
