import { useState } from 'react'

// TODO: bind to cookies accept
function ModalCookies() {
  const [isShow, setIsShow] = useState(true)

  const handler = () => {
    setIsShow(false)
  }

  return (
    <div className={isShow ? 'cookies show' : 'cookies'}>
      <div className="cookies__container">
        <div className="cookies__body">
          <p className="cookies__text" data-translate="COOKIE_INFO">
            Ми використовуємо файли cookie для оптимізації роботи нашого
            сервісу. Продовжуючи користуватися сайтом, ви погоджуєтесь на їх
            використання.
          </p>
          <div className="cookies__buttons">
            <button
              type="submit"
              className="cookies__button btn btn-c cookies__accept"
              data-translate="AGREE_BUTTON"
              onClick={handler}
            >
              Ок
            </button>
            <a
              href="https://google.com"
              className="cookies__button cookies__button-link btn"
              data-translate="CHANGE_BUTTON"
              onClick={handler}
            >
              Змінити
            </a>
          </div>
          <button type="submit" className="cookies__button-close btn-close">
            <span />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalCookies
