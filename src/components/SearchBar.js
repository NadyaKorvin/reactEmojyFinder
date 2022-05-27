export function SearchBar({ recordInput }) {
  return (
    <main>
      <div className="search">
        <input
          className="search__input js__search_input"
          name="search"
          type="search"
          placeholder="Placeholder"
          required
          onChange={recordInput}
          // value={///} -  сдеалет элеемнт контролируемым.
          //
        />
      </div>
      <div className="emoji__block_line"></div>
    </main>
  )
}
