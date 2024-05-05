import Container from "@/components/common/Container";

const Testimonials = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <div className="row items-center py-5 md:pr-16 md:w-4/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Отзывы
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-8/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Узнайте от наших довольных клиентов: прочитайте наши отзывы, чтобы
            узнать больше о наших услугах по цифровому маркетингу
          </p>
        </div>
      </div>

      <div className="flex-row items-center my-6 p-14 bg-black text-white rounded-[45px]">
        <div className="justify-items-center relative w-full border border-lime rounded-3xl">
          <div className="p-4 md:p-10">
            <p className="items-center justify-center text-white text-sm md:text-lg font-normal mb-4">
              Мы работаем с Positivus уже в течение года и видим значительный
              рост трафика на сайте и количество лидов благодаря их усилиям.
              Команда профессиональна, отзывчива и искренне заботится о успехе
              нашего бизнеса. Мы настоятельно рекомендуем Positivus любой
              компании, желающей расширить свое онлайн-присутствие.
            </p>
            <span className="text-lime text-base md:text-xl font-medium">
              Джон Смит
              <br />
            </span>
            <span className="text-white text-lg font-normal">
              Маркетинг-директор в XYZ Corp
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Testimonials;
