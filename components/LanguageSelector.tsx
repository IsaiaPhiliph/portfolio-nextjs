import { useRouter } from "next/router";
import Link from "next/link";

export default function LanguageSelector() {
  const router = useRouter();

  return (
    <div className="flex gap-2 font-medium">
      <Link href={router.pathname} locale="en">
        <button className={`${router.locale === "en" ? "text-primary " : ""} `}>
          EN
        </button>
      </Link>
      <Link href={router.pathname} locale="es">
        <button className={`${router.locale === "es" ? "text-primary " : ""} `}>
          ES
        </button>
      </Link>
    </div>
  );
}
