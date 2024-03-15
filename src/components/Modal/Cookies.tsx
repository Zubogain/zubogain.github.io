function ModalCookies() {
  return (
    <div className="cookies">
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
            >
              Ок
            </button>
            <a
              href="https://google.com"
              className="cookies__button cookies__button-link btn"
              data-translate="CHANGE_BUTTON"
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
