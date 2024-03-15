/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */

import { useState } from 'react'

function TelegramBotSnippet() {
  const [isShow, setIsShow] = useState(true)

  const handler = () => {
    setIsShow(false)
  }

  return (
    <div className="side-button">
      <div className={isShow ? 'side-button__wrap' : 'side-button__wrap close'}>
        <button className="side-button__close" onClick={handler}>
          <img src="/static/img/main/close.svg" alt="svg" />
        </button>
        <p className="side-button__text" data-translate="QUICK_ORDER">
          Телеграм бот
        </p>
        <a href="#" className="side-button__link _icon-telegram" />
      </div>
    </div>
  )
}

export default TelegramBotSnippet
