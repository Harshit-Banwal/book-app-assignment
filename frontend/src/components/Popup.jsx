import axios from 'axios';
import React, { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { baseURL } from '../utils/constant';

const Popup = ({ setShowPopup, popupContent, setUpdateUI }) => {
  const [title, setTitle] = useState(popupContent.title);
  const [author, setAuthor] = useState(popupContent.author);

  const updateBook = () => {
    axios
      .put(`${baseURL}/update/${popupContent.id}`, { title, author })
      .then((res) => {
        console.log(res.data);
        setUpdateUI((prevState) => !prevState);
        setShowPopup(false);
      });
  };

  return (
    <div className="backdrop">
      <div className="popup">
        <RxCross1 className="cross" onClick={() => setShowPopup(false)} />
        <h1>Update Book</h1>

        <div className="popup__input_holder">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            placeholder="Update Title..."
          />
          <input
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            type="text"
            placeholder="Update Author..."
          />
          <button onClick={updateBook}>Update</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
