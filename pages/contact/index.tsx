import Layout from "@/components/Layout";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function ContactPage() {
  const { t } = useTranslation(["common"]);

  return (
    <Layout>
      <section className="py-16 px-8 container mx-auto">
        <h1 className="mb-8 text-3xl">Contact</h1>
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt,
            itaque! Eos recusandae error ex distinctio. Modi laborum molestiae,
            dicta laboriosam nobis quidem, quisquam molestias ducimus veritatis
            optio cupiditate est perferendis!
          </p>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "home"])),
      // Will be passed to the page component as props
    },
  };
}
