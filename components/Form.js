import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  console.log(form);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m2jei1n",
        "template_u2ffrkv",
        form.current,
        "5ESJkyZx8LL0_p-pg"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log(form.current);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="animate__animated animate__fadeIn w-full lg:w-3/5 mx-auto"
    >
      <input
        type="text"
        placeholder="Fullname"
        name="user_name"
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline focus:border-none bg-secondary w-full border-lynch border my-2 text-white"
        required
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline focus:border-none text-white bg-secondary w-full border-lynch border my-2 caret-yellow"
        required
      />
      <br />
      <textarea
        name="message"
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline focus:border-none bg-secondary w-full border-lynch text-white border my-2 caret-yellow"
        rows="10"
        placeholder="Write your message here"
        required
      ></textarea>
      <br />
      <button
        className=" py-3 px-12 rounded-lg text-yellow w-full hover:bg-yellow hover:text-bg font-bold border border-yellow caret-yellow"
        value="send"
      >
        Send
      </button>
    </form>
  );
};

export default Form;
