import Container from "@/components/common/Container";
import { services } from "@/config";
import Image from "next/image";

const Services = () => {
  return (
    <Container>
      <div
        className="relative flex flex-col items-center md:flex-row"
        id="services"
      >
        <div className="row items-center py-5 md:pr-20 md:w-3/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Services
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-9/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>
        </div>
      </div>

      <div className="flex-row items-center py-5">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* Card start  */}
          {services.map(
            ({ background, name1, name2, arrow, link, image }, index) => (
              <div
                key={index}
                className={`${background} "h-[310px] p-12 rounded-[45px] shadow border border-black flex justify-between items-center"`}
              >
                <div className="flex-col justify-center items-start gap-[93px] inline-flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                      <div className="text-3xl font-medium">{name1}</div>
                    </div>
                    <div className="px-[7px] bg-lime-300 rounded-[7px] flex-col justify-start items-start gap-2.5 flex">
                      <div className="text-3xl font-medium">{name2}</div>
                    </div>
                  </div>
                  <a
                    className="justify-start items-center gap-[15px] inline-flex"
                    href={link}
                  >
                    <div className="w-[41px] h-[41px] relative">
                      <Image
                        width={41}
                        height={41}
                        className="w-[41px] h-[41px] left-0 top-0 absolute"
                        alt="arrow"
                        src={arrow}
                      />
                    </div>
                    <div className="text-xl font-normal leading-7">
                      Learn more
                    </div>
                  </a>
                </div>
                <div className="w-[210px] h-[170px] pt-0.5 pb-[1.95px] justify-center items-center flex">
                  <Image
                    className="hidden md:block"
                    height={170}
                    width={210}
                    src={image}
                    alt={name1}
                  />
                </div>
              </div>
            ),
          )}

          {/* Card end  */}
        </div>
      </div>

      <div className="flex-row items-center my-6 p-14 bg-zinc-100 rounded-[45px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="justify-start items-center gap-[275px] flex">
            <div className="flex-col justify-start items-start gap-[26px] inline-flex text-black">
              <div className="text-3xl font-medium">
                Давайте сделаем это вместе
              </div>
              <div className="text-lg font-normal">
                Свяжитесь с нами сегодня, чтобы узнать больше о том, как наши
                услуги в области цифрового маркетинга могут помочь вашему
                бизнесу расти и успешно развиваться в интернете.
              </div>
              <a
                href="/"
                className="px-[35px] py-5 bg-zinc-900 rounded-[14px] justify-start items-start gap-2.5 inline-flex"
              >
                <div className="text-center text-white text-xl font-normal leading-7">
                  Получите ваш бесплатный проект
                </div>
              </a>
            </div>
          </div>
          <div className="hidden md:grid justify-items-center -m-20">
            <Image
              src="/services/Illustration.svg"
              width={600}
              height={600}
              alt="кот"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Services;
