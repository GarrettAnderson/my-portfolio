import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Tooltip } from "react-tooltip";
import "../../styles/Contact.css";

export default function ContactMe(props) {
  const [mouseOutInput, setMouseOutInput] = useState(false);

  const addTooltip = (e) => {
    console.log(e.target);

    e.target.setAttribute("data-tooltip-id", "my-tooltip");
    e.target.setAttribute(
      "data-tooltip-content",
      `Please fill in ${e.target.placeholder}`
    );
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
    <form
      id="contact-form"
      className="needs-validation"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <div className="col">
          <input
            type="text"
            className="form-control has-validation"
            placeholder="First name"
            aria-label="First name"
            onMouseEnter={addTooltip}
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
        <input type="submit" class="submit-btn" />
      </div>
      <Tooltip id="my-tooltip" />
    </form>
  );
}
