import React from 'react';
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './About';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import BookModal from './BookModal';
// import Button from 'react-boostrap/Button';


function App() {

  const [modalState, setModalState] = useState(false);

  function modalShow() {
    setModalState(true);
  }

  const books = [];

  async function onCreate(bookInfo) {
    const response = await axios.post('https://can-of-book-backend.onrender.com/books', bookInfo)
    const newBook = response.data;
    books.push(newBook);
  }

  return (
    <>
      <Router>
        <Header />
        <button onClick={modalShow}></button>
        <BookModal onCreate={onCreate} show={modalState} />
        <Routes>
          <Route
            exact path="/"
            element={<BestBooks books={books} />}
          >
          </Route>
          <Route
            exact path="/About"
            element={<Profile />}
          >
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
