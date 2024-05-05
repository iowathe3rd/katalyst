import Container from "@/components/common/Container";
import Image from "next/image";

const ContactUs = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <div className="row items-center py-5 md:pr-16 md:w-4/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Свяжитесь с нами
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-8/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Свяжитесь с нами: Обсудим ваши потребности в цифровом маркетинге
          </p>
        </div>
      </div>

      <div className="relative flex flex-col items-center md:flex-row my-6 bg-zinc-100 rounded-[45px]">
        <div className="row items-center py-12 px-4 md:px-20 md:w-8/12 md:py-10">
          <form action="#" className="space-y-8 md:w-full">
            <div className="flex">
              <div className="flex items-center me-4">
                <input
                  id="inline-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-base font-medium text-black"
                >
                  Привет
                </label>
              </div>
              <div className="flex items-center me-4 mx-8 md:mx-20">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value=""
                  name="inline-radio-group"
                  className="w-4 h-4 text-lime bg-black border-black focus:ring-lime"
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-base font-medium text-black"
                >
                  Получить котировку
                </label>
              </div>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-base font-medium text-black"
              >
                Имя
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-white border text-black text-base rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                placeholder="Имя"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-base font-medium text-black"
              >
                Email
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-base text-black bg-white rounded-lg border shadow-sm focus:ring-black focus:border-black"
                placeholder="Email"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-black dark:text-gray-400"
              >
                Сообщение
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-base text-black bg-white rounded-lg shadow-sm border focus:ring-black focus:border-black"
                placeholder="Сообщение"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-5 bg-zinc-900 rounded-[14px] justify-center gap-2.5 inline-flex"
            >
              <div className="text-center text-white text-xl font-normal leading-7">
                Отправить сообщение
              </div>
            </button>
          </form>
        </div>
        <div className="hidden md:grid md:justify-items-end md:w-4/12 md:py-2">
          <Image src="./clients/contact.svg" alt="c" width={400} height={400} />
        </div>
      </div>
    </Container>
  );
};

export default ContactUs;
