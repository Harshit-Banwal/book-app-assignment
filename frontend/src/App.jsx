import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { baseURL } from './utils/constant';
import Popup from './components/Popup';
import Book from './components/Book';

const App = () => {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [updateUI, setUpdateUI] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState({});

  useEffect(() => {
    axios
      .get(`${baseURL}/get`)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }, [updateUI]);

  const saveBook = () => {
    axios
      .post(`${baseURL}/save`, { title, author })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setTitle('');
        setAuthor('');
      })
      .catch((err) => console.log(err));
  };

  return (
    <main>
      <div className="container">
        <h1 className="title">Book App</h1>

        <div className="input_holder">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Add Title..."
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Add Author..."
          />
          <button onClick={saveBook}>Add</button>
        </div>

        <div className="list">
          {books.map((el) => (
            <Book
              key={el._id}
              title={el.title}
              author={el.author}
              id={el._id}
              setUpdateUI={setUpdateUI}
              setShowPopup={setShowPopup}
              setPopupContent={setPopupContent}
            />
          ))}
        </div>
      </div>
      {showPopup && (
        <Popup
          setShowPopup={setShowPopup}
          popupContent={popupContent}
          setUpdateUI={setUpdateUI}
        />
      )}
    </main>
  );
};

export default App;
