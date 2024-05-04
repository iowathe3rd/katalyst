import Container from "@/components/common/Container";
import Image from "next/image";

const Cases = () => {
  return (
    <Container>
      <div
        className="relative flex flex-col items-center md:flex-row"
        id="projects"
      >
        <div className="row items-center py-5 md:pr-40 md:w-5/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Наши кейсы
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-7/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Изучите реальные примеры нашего успешного цифрового маркетинга на
            наших успешных кейсах
          </p>
        </div>
      </div>

      <div className="w-full p-12 bg-zinc-900 rounded-[45px] justify-start items-start gap-16 inline-flex text-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 divide-x-0 md:divide-x divide-y md:divide-y-0">
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              Для местного ресторана мы запустили таргетированную рекламную
              кампанию, которая привела к увеличению трафика на сайте на 50% и
              увеличению продаж на 25%.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">
                Узнать больше
              </div>
              <Image
                src="/services/agc.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              Для компании B2B разработали стратегию SEO, которая привела к
              выходу на первую страницу по ключевым запросам и увеличению
              органического трафика на 200%.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">
                Узнать больше
              </div>
              <Image
                src="/services/agc.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </div>
          <div className="flex-col items-start gap-5 inline-flex px-2 md:px-6 py-6 md:py-2">
            <div className="w-full text-lg font-normal">
              Для национальной розничной сети создали кампанию маркетинга в
              социальных сетях, которая увеличила количество подписчиков на 25%
              и принесла увеличение онлайн-продаж на 20%.
            </div>
            <div className="justify-start items-center gap-[15px] inline-flex">
              <div className="text-lime text-xl font-normal leading-7">
                Узнать больше
              </div>
              <Image
                src="/services/agc.svg"
                width={20}
                height={20}
                alt="arrow"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Cases;
