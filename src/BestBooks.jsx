import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'

function BestBooks() {
  // constructor (props) {
  //   super(props);
  //   this.state = {
  //     books: []
  //   }
  // }

  const [books, setBooks] = useState([]);

  useEffect(() => {
    mount();
  }, []);

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  async function mount() {
    try {
      // app.get('/books', async (request, response) => {
      const response = await axios.get('http://localhost:3000/books');
      if (response.data) {
        console.log(response.data)
        setBooks(response.data);
      }
    } catch (error) {
      console.log(error);
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
          </Carousel.Item>
          <Carousel.Item>
          <h3>{books[3].title}</h3>
            <p>{books[3].description}</p>
            <p>Status: {books[3].status}</p>
          </Carousel.Item>
          <Carousel.Item>
          <h3>{books[4].title}</h3>
            <p>{books[4].description}</p>
            <p>Status: {books[4].status}</p>
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
