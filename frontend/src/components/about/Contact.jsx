export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact-us">
      <div className="flex justify-center">
        <form
          className=" bg-form flex flex-col items-center justify-center py-8 md:px-6 dark:bg-black w-11/12 rounded-lg md:w-2/4 lg:w-2/5 "
          onSubmit={handleFormSubmit}
        >
          <div>
            <p className="font-sans text-indigo-600 md:w-2/4">Name</p>
            <input
              className="bg-gray-300 dark:bg-white form__input w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900 md:w-[350px] mt-2 xl:w-[500px]"
              type="text"
              placeholder="Name"
              id="text"
              name="name"
              required
            />
          </div>
          <div>
            <p className="font-sans text-indigo-600 mt-2">Email</p>
            <input
              className="mt-2 bg-gray-300 dark:bg-white md:w- w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900  md:w-[350px] xl:w-[500px]"
              type="email"
              placeholder="Email"
              id="email"
              name="user_email"
              required
            />
          </div>
          <div>
            <p className="text-indigo-600 mt-2">Message</p>
            <textarea
              className="mt-2 resize-none bg-gray-300 dark:bg-white textarea w-[80vw] items-start rounded px-5 py-1.5 outline-none placeholder:text-neutral-900  md:w-[350px] xl:w-[500px] h-64"
              placeholder="Message"
              name="message"
              required
            />
          </div>
          <button
            className="font-header font-bold contact-button mt-2 rounded bg-gray-300 submit w-[80vw] md:w-[350px] xl:w-[500px] h-10 text-white"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
