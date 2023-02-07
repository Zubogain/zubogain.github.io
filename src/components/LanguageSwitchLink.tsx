import languageDetector from '@Libs/languageDetector'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { QueryWithLocale } from '@Interfaces/query'

interface IProps {
  locale: string
}

const LanguageSwitchLink = ({ locale }: IProps) => {
  const router = useRouter()
  const query = router.query as QueryWithLocale

  let pName = router.pathname

  if (query.locale) {
    console.log(locale)
    pName = pName.replace(`[locale]`, locale)
  }

  return (
    <Link
      href={pName}
      className="cap__text"
      onClick={() => {
        if (languageDetector.cache) {
          languageDetector.cache(locale)
        }
      }}
    >
      {locale}
    </Link>
  )
}

export default LanguageSwitchLink
