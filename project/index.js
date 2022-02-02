import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const Book1 = {
  title: "Icons of Grace",
  author: " Swami Nityanand Charan Das ",
  img: "https://images-eu.ssl-images-amazon.com/images/I/41QxKR4wKXL._AC_SX184_.jpg",
};
const Book2 = {
  title: "Sleep Your Way to Success",
  author: " Dinesh Ghodke ",
  img: "https://images-eu.ssl-images-amazon.com/images/I/31bFMwigy8L._AC_SX184_.jpg",
};
function Booklist() {
  return (
    <article className="booklist">
      <Book title={Book1.title} author={Book1.author} img={Book1.img} />
      <Book title={Book2.title} author={Book2.author} img={Book2.img} />
    </article>
  );
}

const Book = ({ img, title, author }) => {
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <p>{author}</p>
    </article>
  );
};

ReactDOM.render(<Booklist />, document.getElementById("root"));
