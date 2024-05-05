import Container from "@/components/common/Container";
import { team } from "@/config";
import Image from "next/image";

const Team = () => {
  return (
    <Container>
      <div className="relative flex flex-col items-center md:flex-row">
        <div className="flex flex-row items-center py-5 md:pr-16 md:w-6/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Процесс
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-6/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Пошаговое руководство для достижения ваших бизнес-целей
          </p>
        </div>
      </div>

      <div
        id="accordion-open"
        data-accordion="close"
        className="text-black grid gap-4 my-6"
      >
        {team.process.map(({ id, hid, bid, target, title, description }) => (
          <h2 id={hid} key={id}>
            <div className="w-full px-14 py-10 bg-white focus:bg-lime rounded-[45px] shadow border border-black flex-col justify-start items-start gap-7 inline-flex">
              <button
                type="button"
                className="w-full flex justify-between items-center"
                data-accordion-target={target}
                aria-expanded="true"
                aria-controls={bid}
              >
                <div className="justify-start items-center gap-6 flex">
                  <h2 className="text-xl md:text-6xl font-medium">{id}</h2>
                  <h3 className="text-lg md:text-3xl font-medium">{title}</h3>
                </div>
                <div>
                  <Image
                    width={40}
                    height={40}
                    data-accordion-icon
                    src="/team/plus.svg"
                    alt=""
                    className="justify-items-end w-10 h-10"
                    aria-hidden="true"
                  />
                </div>
              </button>
              <div
                className="text-lg font-normal"
                id={bid}
                aria-labelledby={hid}
              >
                <hr className="w-full border border-black mb-6" />
                <p className="mb-2 text-gray-500 text-sm md:text-lg">
                  {description}
                </p>
              </div>
            </div>
          </h2>
        ))}
      </div>

      <div className="relative flex flex-col items-center md:flex-row">
        <div className="row items-center py-5 md:pr-16 md:w-2/12 md:py-10">
          <div className="text-center md:text-left space-y-3 bg-lime">
            <h2 className="text-4xl font-medium leading-none sm:text-6xl">
              Мы
            </h2>
          </div>
        </div>
        <div className="flex items-center py-5 md:w-10/12 md:py-10">
          <p className="text-xl font-normal leading-7 text-center md:text-left">
            Познакомтесь с нашими опытными специалистами
          </p>
        </div>
      </div>

      <div className="flex-row items-center py-5" id="team">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4">
          {team.team.map(({ title, description, name, link, profile }) => (
            <div
              key={name}
              className="h-[331px] px-[35px] py-10 bg-white rounded-[45px] shadow border border-zinc-900 flex-col justify-start items-start gap-2.5 inline-flex text-black"
            >
              <div className="flex-col justify-start items-start gap-7 flex">
                <div className="self-stretch justify-start items-start inline-flex">
                  <div className="grow shrink basis-0 justify-start items-center gap-8 flex">
                    <div className="h-[102.82px] left-0 top-0 relative">
                      <Image
                        height={100}
                        width={100}
                        src={profile}
                        alt={name}
                      />
                    </div>
                    <div className="flex-col justify-end items-start inline-flex">
                      <div className="text-lg font-normal">{title}</div>
                      <div className="text-xl font-medium">{name}</div>
                    </div>
                  </div>
                  <a className="top-0 right-0" href={link}>
                    <Image
                      width={30}
                      height={30}
                      src="/team/lng.svg"
                      alt="vector"
                    />
                  </a>
                </div>
                <hr className="w-full border border-black" />
                <p className="text-sm md:text-lg">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="w-full justify-center md:justify-end items-center inline-flex">
        <button className="px-8 py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-xl font-normal leading-7">
          Посмотреть всю команду
        </button>
      </div>
    </Container>
  );
};

export default Team;
