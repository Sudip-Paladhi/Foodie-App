import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2v9hwav",
        "template_v4p9iwc",
        form.current,
        "Yo2Nv1Le46GHS-ljd"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
    alert("thanks for sending the message.");
  };

  return (
    <section
      id="contact"
      className="md:mt-10 lg:my-8 lg:mx-10 about-scroll p-2"
    >
      <h5 className="text-2xl font-bold text-slate-400 mx-auto w-fit">
        Reach out
      </h5>
      <div className="text-center font-bold text-lg text-orange-500 font-Quicksand">
        <a href="https://www.linkedin.com/in/sudip-paladhi-064a47128/">
          SUDIP PALADHI
        </a>
      </div>

      <div className="flex lg:mx-[20%] my-5 md:my-8 gap-7 justify-between flex-col md:flex-row">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex gap-2 flex-col w-full"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Full Name"
            required
            className="border-gray-400 border-2 hover:shadow-md p-3 rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="border-gray-400 border-2 p-3 rounded-md focus:outline-none hover:shadow-md"
          />
          <textarea
            className="p-3 border-gray-400 border-2 rounded-md focus:outline-none hover:shadow-md"
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="p-3 rounded-md font-medium hover:shadow-md hover:font-bold  bg-slate-200-200 border-2 border-gray-400"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};
export default Contact;
