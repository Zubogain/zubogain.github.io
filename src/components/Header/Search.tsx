function Search() {
  return (
    <form action="#" className="header__search search-header">
      <input
        id="search-input"
        type="text"
        name="form[]"
        data-error="Ошибка"
        data-translate="MAIN_SEARCH_PLACEHOLDER"
        placeholder="Що потрібно знайти?"
        className="search-header__input"
      />
      <ul
        id="suggestions-list"
        className="search-header__suggestions-list"
      ></ul>
      <button
        type="submit"
        className="search-header__button _icon-search-1 btn-c"
      ></button>
      <button
        type="button"
        className="search-header__button-clear btn-close"
      ></button>
    </form>
  )
}

export default Search
