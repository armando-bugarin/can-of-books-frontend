import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

function BestBooks(props) {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   }
  // }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    mount();
    extraBooks();
  }, []);

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  async function mount() {
    try {
      // app.get('/books', async (request, response) => {
      const response = await axios.get('https://can-of-book-backend.onrender.com/books');
      if (response.data) {
        console.log(response.data)
        setBooks(response.data);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function extraBooks() {
    if(books !== null && props.books !== null) {
      books.push(props.books);
    }
  }

  async function deleteBook(bookToDelete) {
    const url = `https://can-of-book-backend.onrender.com/books?${bookToDelete._id}`;
    try {
      await axios.delete.url
      const bookFilter = books.filter(book._id => book._id !== bookToDelete._id);
      setBooks(bookFilter);
    }
    catch(error) {
      console.log('error');
    }
  }

  // Mount()



  return (
    <>
      <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

      {books.length ? (
        <Carousel>
          <Carousel.Item>
            <h3>{books[0].title}</h3>
            <p>{books[0].description}</p>
            <p>Status: {books[0].status}</p>
            <button onClick={deleteBook}>Delete</button>
          </Carousel.Item>
          <Carousel.Item>
          <h3>{books[1].title}</h3>
            <p>{books[1].description}</p>
            <p>Status: {books[1].status}</p>
            <button onClick={deleteBook}>Delete</button>
          </Carousel.Item>
          <Carousel.Item>
          <h3>{books[2].title}</h3>
            <p>{books[2].description}</p>
            <p>Status: {books[2].status}</p>
            <button onClick={deleteBook}>Delete</button>
          </Carousel.Item>
        </Carousel>
      ) : (
        <Carousel.Item>
          <h3>No Books Found </h3>
        </Carousel.Item >
      )}
    </>
  )
}

export default BestBooks;
