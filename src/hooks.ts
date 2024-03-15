/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from 'react'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { AppDispatch, RootState } from './store'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const useThemeDetector = () => {
  if (typeof window !== 'undefined') {
    const getCurrentTheme = () =>
      window.matchMedia('(prefers-color-scheme: dark)').matches
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme())
    const mqListener = (e: any) => {
      setIsDarkTheme(e.matches)
    }

    useEffect(() => {
      const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
      darkThemeMq.addListener(mqListener)
      return () => darkThemeMq.removeListener(mqListener)
    }, [])
    return isDarkTheme
  }
  return false
}
