import React, { useState, useEffect } from "react";
import axios from "../api/axios";
import "../styles/PostedBooks.css";

const PostedBooks = () => {
  const getBooksUrL = "/api/get_books/";
  const userId = window.localStorage.getItem("userId");
  const userName = window.localStorage.getItem("userName");
  const [postedBooks, setPostedBooks] = useState();
  useEffect(() => {
    getPostedBooks();
  }, []);
  const getPostedBooks = async () => {
    axios
      .get(getBooksUrL, { params: userId })
      .then((res) => {
        console.log(res.data);
        setPostedBooks(res.data);
      })
      .catch((err) => console.log(err));
  };
  return <div className="posted-books-container container">Hello</div>;
};

export default PostedBooks;
