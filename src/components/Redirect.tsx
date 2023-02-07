import { useEffect } from 'react'
import { useRouter } from 'next/router'
import languageDetector from '@Libs/languageDetector'

export const useRedirect = (to?: string) => {
  const router = useRouter()
  const toOrPath = to || router.asPath

  // language detection
  useEffect(() => {
    const detectedLng = languageDetector.detect()
    if (toOrPath.startsWith(`/${detectedLng}`) && router.route === '/404') {
      // prevent endless loop
      router.replace(`/${detectedLng}${router.route}`)
    }

    if (languageDetector.cache) {
      languageDetector.cache(detectedLng as string)
    }

    router.replace(`/${detectedLng}${to}`)
  })
}

export const Redirect = () => {
  useRedirect()
}

// eslint-disable-next-line react/display-name
export const getRedirect = (to?: string) => () => {
  useRedirect(to)
}
