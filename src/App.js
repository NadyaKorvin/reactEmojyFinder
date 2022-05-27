import "./App.css"
import "./components/reset.css"
import "./components/style.css"
import "./components/cards.css"
import "./components/data.js"
import { Header } from "./components/Header"
import { SearchBar } from "./components/SearchBar"
import { Footer } from "./components/Footer"
import { Card } from "./components/Card"
import { useState, useEffect } from "react"
import { Select } from "./components/Select"
import { Pagination } from "./components/Pagination"

function App() {
  const [text, setText] = useState("")
  const [selectOptionElementsOnPage, setSelectOptionElementsOnPage] = useState(12)
  const [currentPage, setCurrentPage] = useState(1)

  const [data, setData] = useState([])

  useEffect(() => {
    fetch("https://emoji-api-app.herokuapp.com/")
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  const recordInput = (event) => {
    setText(event.target.value)
  }
  const recordElementsOnPage = (event) => {
    setSelectOptionElementsOnPage(event.target.value)
  }
  const recordCurrentPages = (event) => {
    setCurrentPage(event.target.value)
  }

  let deletedDubbleData = data.map((element) => {
    for (let key in element) {
      if (key === "keywords") {
        element[key] = [...new Set(element[key].split(" "))].join(" ")
      }
    }
    return element
  })

  const searchData = deletedDubbleData.filter(
    (elem) =>
      text
        .toLowerCase()
        .split(" ")
        .every((word) => elem.title.toLowerCase().includes(word) || elem.keywords.toLowerCase().includes(word))

    ///можно добавить trim и replase(/\s+/g, "") -заменит двойные проелы на одинарные
  )

  const lastIndex = currentPage * selectOptionElementsOnPage
  const firstIndex = lastIndex - selectOptionElementsOnPage

  return (
    <div className="App">
      <Header />
      <SearchBar recordInput={recordInput} />

      <div className="emoji__block_line">
        {searchData.slice(firstIndex, lastIndex).map((elem) => (
          <Card key={elem.title} {...elem} />
        ))}
      </div>
      <div className="pagination_and_select">
        <Pagination
          allPages={Math.ceil(searchData.length / selectOptionElementsOnPage)}
          recordCurrentPages={recordCurrentPages}
          currentPage={currentPage}
        />
        <Select recordElementsOnPage={recordElementsOnPage} />
      </div>
      <Footer />
    </div>
  )
}

export default App
