import axios from 'axios';
import React from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from '../utils/constant';

const Book = ({
  title,
  author,
  id,
  setUpdateUI,
  setShowPopup,
  setPopupContent,
}) => {
  const deleteBook = () => {
    axios.delete(`${baseURL}/delete/${id}`).then((res) => {
      console.log(res.data);
      setUpdateUI((prevState) => !prevState);
    });
  };

  const updateBook = () => {
    setPopupContent({ title, author, id });
    setShowPopup(true);
  };

  return (
    <div className="book">
      <p>Title: {title}</p>
      <p>Author: {author}</p>
      <div className="icons">
        <AiFillEdit className="icon" onClick={updateBook} />
        <RxCross1 className="icon" onClick={deleteBook} />
      </div>
    </div>
  );
};

export default Book;
