import languageDetector from "../libs/languageDetector";
import { useRouter } from "next/router";
import Link from "next/link";
import { QueryWithLocale } from "interfaces/query";

interface IProps {
  locale: string;
  href?: string;
}

const LanguageSwitchLink = ({ locale, ...rest }: IProps) => {
  const router = useRouter();
  const query = router.query as QueryWithLocale;

  let href = rest.href || router.asPath;
  let pName = router.pathname;

  if (query.locale) {
    console.log(locale);
    pName = pName.replace(`[locale]`, locale);
  }
  if (locale) {
    href = rest.href ? `/${locale}${rest.href}` : pName;
  }

  return (
    <Link
      href={href}
      className="cap__text"
      onClick={() => {
        if (languageDetector.cache) {
          languageDetector.cache(locale);
        }
      }}
    >
      {locale}
    </Link>
  );
};

export default LanguageSwitchLink;
