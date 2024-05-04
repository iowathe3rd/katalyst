import Container from "@/components/common/Container";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-lime bg-fixed bg-bottom text-black">
      <Container>
        <div className="py-6">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <div className="flex items-center space-x-3 rtl:space-x-reverse">
              <Image
                className="w-auto"
                src="/Logo.svg"
                alt="Logo"
                width={90}
                height={90}
              />
            </div>
            <div className="flex mt-4 md:m-0">
              <div className="-mx-4">
                @ <span id="currentYear"></span> Positivus | Made with{" "}
                <a
                  href="https://astro.build/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline"
                >
                  Astro
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
