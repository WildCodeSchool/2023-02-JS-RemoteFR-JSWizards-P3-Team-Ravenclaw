export default function Contact() {

  const handleFormSubmit = (e) => {
    e.preventDefault();
  }
  return (
    <div className="contact-us">
      <div className="flex justify-center">
        <form
          className="flex flex-col items-center justify-center py-8 bg-gray-100 dark:bg-black w-11/12 rounded-lg drop-shadow-lg md:w-2/4 lg:w-2/5 "
          onSubmit={handleFormSubmit}
        >
          <div>
            <p className="text-indigo-600 md:w-2/4">Name</p>
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
            <p className="text-indigo-600 mt-2">Email</p>
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
          <input
            className="mt-2 rounded bg-gray-300 submit w-[80vw] md:w-[350px] xl:w-[500px] h-10 text-white bg-gradient-to-b from-indigo-500 to-indigo-700"
            type="submit"
            value="Send"
          />
        </form>
      </div>
    </div>
  );
}
