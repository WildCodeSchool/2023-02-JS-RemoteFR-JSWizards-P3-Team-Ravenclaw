export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <div className="flex justify-center">
        <form
          className=" bg-form flex w-11/12 flex-col items-center justify-center rounded-lg py-8 dark:bg-black md:w-2/4 md:px-6 lg:w-2/5 "
          onSubmit={handleFormSubmit}
        >
          <div>
            <p className="font-sans text-indigo-600 md:w-2/4">Name</p>
            <input
              className="form__input placeholder:text-neutral-900 mt-2 w-[80vw] items-start rounded bg-gray-300 px-5 py-1.5 outline-none dark:bg-white md:w-[350px] xl:w-[500px]"
              type="text"
              placeholder="Name"
              id="text"
              name="name"
              required
            />
          </div>
          <div>
            <p className="mt-2 font-sans text-indigo-600">Email</p>
            <input
              className="md:w- placeholder:text-neutral-900 mt-2 w-[80vw] items-start rounded bg-gray-300 px-5 py-1.5 outline-none dark:bg-white  md:w-[350px] xl:w-[500px]"
              type="email"
              placeholder="Email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div>
            <p className="mt-2 text-indigo-600">Message</p>
            <textarea
              className="textarea placeholder:text-neutral-900 mt-2 h-64 w-[80vw] resize-none items-start rounded bg-gray-300 px-5 py-1.5 outline-none  dark:bg-white md:w-[350px] xl:w-[500px]"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <button
            className="contact-button submit mt-2 h-10 w-[80vw] rounded bg-gray-300 font-header font-bold text-white md:w-[350px] xl:w-[500px]"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
