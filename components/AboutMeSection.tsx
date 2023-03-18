import { useTranslation } from "next-i18next";
import Image from "next/image";
import AnchorButton from "./AnchorButton";

export default function AboutMeSection() {
  const { t } = useTranslation();

  return (
    <section className="py-16 px-8 container mx-auto">
      <div className="flex gap-8 items-center pb-12">
        <h2 className="font-medium text-xl md:text-4xl">
          <span className="text-primary">#</span>
          {t("header.about-me")}
        </h2>
        <hr className="flex-1 text-primary" />
      </div>
      <div className="flex flex-col gap-4 lg:flex-row items-center">
        <div className="flex-1 text-customGray flex flex-col gap-4">
          <p>Hello, I'm Pablo!</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            ipsam similique molestiae nobis? Praesentium maiores molestiae
            accusantium eveniet! Expedita quidem odit enim. Optio praesentium
            consequuntur ullam harum ab assumenda vitae.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
            commodi veritatis fugiat quas rerum. Autem esse tenetur accusantium.
            Nobis consequatur sint iste impedit aperiam enim necessitatibus
            porro inventore nostrum? Provident!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
            in, assumenda necessitatibus possimus consequatur placeat. Velit at
            blanditiis harum inventore unde voluptate, ut, voluptates, laborum
            molestiae in itaque labore pariatur.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Image
            src="/images/about-me-image.png"
            width={339}
            height={507}
            alt="image of a guy"
            className="border-b border-primary"
          />
        </div>
      </div>
      <div className="py-8 flex justify-start">
        <AnchorButton variant="primary" href="/about-me">
          {t("readMore")}
        </AnchorButton>
      </div>
    </section>
  );
}
