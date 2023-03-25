import React, { useEffect, useState } from "react"

import axios from "axios"
import Books from "./components/Books"

const API_URL = "http://localhost:3000/api/v1/books"

let bookData

function getAPIData() {
  bookData =  axios.get(API_URL).then((response) => response.data)
  return bookData
}

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    let mounted = true
    getAPIData().then((items) => {
      if (mounted) {
        setBooks(items)
      }
      return () => (mounted = false)
    })
  }, [bookData])

  return (
    <div className="App" style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center"
    }}>
      <h1>Book List</h1>
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "auto"
      }}>
        <Books books={books}/>
      </div>
    </div>
  );
}

export default App;
