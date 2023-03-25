import React from 'react'

const Books = ({ books }) => {
  return (
    <div>
        <h1>These are books from the API</h1>
        {books.map((book) => (
            <div key={book.id} style={{
                border: "1px solid #000",
                maxWidth: "470px",
                padding: "1rem",
                borderRadius: "0.5rem",
                margin: "1rem"
            }}>
                <h2>{book.title}</h2>
                <p>{book.body}</p>
            </div>
        ))}
    </div>
  )
}

export default Books