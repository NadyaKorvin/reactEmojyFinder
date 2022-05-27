export function Pagination({ allPages, recordCurrentPages, currentPage }) {
  const pages = []
  for (let i = 1; i <= allPages; i++) {
    pages.push(i)
  }

  ////можно [...Array(pages).keys()] - тоже получим массив
  let firstIndex = 0

  //   console.log(currentPage)
  //   console.log(allPages)

  const findIndexes = (currentPage) => {
    if (currentPage > 3 && currentPage < allPages - 3) {
      firstIndex = +currentPage - 3
    } else if (currentPage >= allPages - 3) {
      firstIndex = allPages - 6
    } else {
      firstIndex = 0
    }
  }

  findIndexes(currentPage)

  return (
    <div className="pagination__elements">
      <button className="first_last_pagination_buttons" value={1} onClick={recordCurrentPages}>
        First Page
      </button>
      {pages.slice(firstIndex, firstIndex + 5).map((elem) => (
        <button key={elem} value={elem} className="pagination__button" onClick={recordCurrentPages}>
          {elem}
        </button>
      ))}
      <button className="first_last_pagination_buttons" value={allPages} onClick={recordCurrentPages}>
        Last Page
      </button>
    </div>
  )
}
