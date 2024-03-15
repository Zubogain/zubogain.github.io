/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line import/no-extraneous-dependencies
import { useWindowScroll } from '@uidotdev/usehooks'
import { useEffect, useState } from 'react'

function ScrollArrow() {
  const isBrowser = typeof window !== 'undefined'
  const [isShow, setIsShow] = useState(false)
  const [{ x, y }, scrollTo] = isBrowser
    ? useWindowScroll()
    : [{ x: 0, y: 0 }, (args: unknown) => {}] // placeholder

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    y != null && y >= 200
      ? !isShow && setIsShow(true)
      : isShow && setIsShow(false)
  }, [y, isShow])

  const handler = () => {
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div
      className={
        isShow
          ? 'arrow-up _icon-arrow-1 arrow-up__active'
          : 'arrow-up _icon-arrow-1'
      }
      onClick={handler}
    />
  )
}

export default ScrollArrow
