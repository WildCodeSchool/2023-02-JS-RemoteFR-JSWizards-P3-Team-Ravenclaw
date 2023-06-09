import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1ty7vio",
        "template_0nrha7g",
        form.current,
        "DpyErOOFj-rhnWX7-"
      )
      .then(
        (result) => {
          console.info(result.text);
          console.info("message sent");
          e.target.reset();
          toast.success("Message sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        },
        (error) => {
          console.error(error.text);
        }
      );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="flex max-w-xl flex-col items-center justify-center gap-3 rounded-lg bg-neutralLightest px-6 py-8 shadow-[0_10px_15px_rgba(0,0,0,0.25)] md:m-auto md:w-[50%] md:min-w-[576px]"
    >
      <label htmlFor="name" className="w-full text-primaryLight">
        Name
        <input
          className="mt-1 block w-full items-start rounded bg-neutralLight px-5 py-1.5 outline-primaryLight placeholder:text-neutral"
          type="text"
          placeholder="Name"
          id="name"
          name="name"
          required
        />
      </label>
      <label htmlFor="email" className="w-full text-primaryLight">
        Email
        <input
          className="mt-1 block w-full items-start rounded bg-neutralLight px-5 py-1.5 outline-primaryLight placeholder:text-neutral"
          type="email"
          placeholder="Email"
          id="email"
          name="user_email"
          required
        />
      </label>
      <label htmlFor="message" className="w-full text-primaryLight">
        Message
        <textarea
          className="mt-1 block h-[200px] w-full resize-none items-start rounded bg-neutralLight px-5 py-1.5 outline-primaryLight placeholder:text-neutral"
          placeholder="Message"
          id="message"
          name="message"
          required
        />
      </label>
      <button
        className="w-full rounded bg-gradient-to-t from-[#4E5DB6]/95 to-[#9969C4] py-3 font-header font-extrabold text-neutralLightest"
        type="submit"
      >
        Send
      </button>
      <ToastContainer />
    </form>
  );
}
