import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

function Booklist() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const title = "The Girl Who Drank the Moon";
const author = " Kelly Barnhill ";
const Book = () => {
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/7138zaESFhL._AC_UY327_FMwebp_QL65_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
