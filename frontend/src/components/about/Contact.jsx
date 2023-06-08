export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className="flex max-w-xl flex-col items-center justify-center gap-3 rounded-lg bg-neutralLightest px-6 py-8 shadow-[0_10px_15px_rgba(0,0,0,0.25)] md:m-auto md:w-[50%] md:min-w-[576px]"
      onSubmit={handleFormSubmit}
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
          className="mt-1 block h-[200px] w-full items-start rounded bg-neutralLight px-5 py-1.5 outline-primaryLight placeholder:text-neutral"
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
    </form>
  );
}
