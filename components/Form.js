import React from "react";

const Form = () => {
  return (
    <form className="w-3/5">
      <input
        type="text"
        placeholder="Fullname"
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none bg-secondary w-full border-lynch border my-4"
      />
      <br />
      <input
        type="email"
        placeholder="Email"
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none bg-secondary w-full border-lynch border my-4 caret-yellow"
      />
      <br />
      <textarea
        className="px-5 py-4 rounded-lg focus:outline-yellow focus:outline-1 focus:border-none bg-secondary w-full border-lynch border my-4 caret-yellow"
        rows="10"
        placeholder="Write your message here"
      ></textarea>
      <br />
      <button className=" py-3 px-12 rounded-lg text-yellow w-full hover:bg-yellow hover:text-bg font-bold border border-yellow caret-yellow">
        Send
      </button>
    </form>
  );
};

export default Form;
