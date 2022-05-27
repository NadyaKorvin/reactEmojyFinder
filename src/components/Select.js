import { useState } from "react"

export function Select({ recordElementsOnPage }) {
  return (
    <select onChange={recordElementsOnPage}>
      <option>12</option>
      <option>24</option>
      <option>36</option>
    </select>
  )
}
