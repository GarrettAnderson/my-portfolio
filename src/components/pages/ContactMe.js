import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";

export default function ContactMe() {
  const [mouseOutInput, setMouseOutInput] = useState(false);

  const addTooltip = (e) => {
    console.log(e.target);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="needs-validation" onSubmit={handleSubmit(onSubmit)}>
      <div className="row" novalidate>
        <div className="col">
          <input
            type="text"
            className="form-control has-validation"
            placeholder="First name"
            aria-label="First name"
            onMouseOut={addTooltip}
            {...register("First Name", { required: true })}
          />
          {errors.firstName && <p>First name is required.</p>}
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
        {/* <button className="btn btn-primary" type="submit">
          Contact Me
        </button> */}
        <input type="submit" />
      </div>
    </form>
  );
}
