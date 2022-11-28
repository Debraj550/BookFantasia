import axios from "../api/axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const getBookData = async () => {
  const url = "/api/get_books/";
  const imageDefaultPath = "http://127.0.0.1:8000/image_folder/";
  const [BookData, setBookData] = useState();
  const [errors, setErrors] = useState();

  const [NewBookData, setNewBookData] = useState();
  const [error, setError] = useState();

  const [TrendBookData, setTrendBookData] = useState();
  const [allerror, allsetError] = useState();
  const response = await axios
    .get(url)
    .then((res) => {
      const result = res.data.filter((currEle) => {
        return currEle.no_of_hit >= 0;
      });
      setBookData(result);
      const result2 = res.data.filter((currEle) => {
        return currEle.date_time >= "2022-11-17T12:52:51.214";
      });
      setNewBookData(result2);
      const result3 = res.data.filter((currEle) => {
        return currEle.book_rating >= 1;
      });
      setTrendBookData(result3);
    })
    .catch((err) => {
      setErrors(err);
      console.log(err);
    });
};

export { BookData, NewBookData, TrendBookData };
