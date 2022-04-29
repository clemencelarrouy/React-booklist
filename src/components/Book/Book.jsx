import Cover from "./Cover";
import { Link } from "react-router-dom";
import React from "react";

const Book = ({ title, author, id, cover, description }) => {
  const renderLink = () =>
    id && (
      <Link
        to={{ pathname: "/book/" + id }}
        className="block transition-all m-auto mb-4 rounded-full py-2 px-4 border-2 border-slate-300
                         uppercase font-bold text-xs
                         hover:text-white bg-slate-200 hover:bg-slate-300 cursor-pointer"
      >
        More Information
      </Link>
    );

  return (
    <li className="Book shadow-lg bg-slate-100 rounded-lg w-full md:w-[45%] lg:w-[30%] mb-6 flex flex-wrap justify-around p-4">
      <h2 className="inline-block"> {title}</h2>
      <span className="block py-4 w-full text-center">{author}</span>
      {renderLink()}
      <Cover url={cover} title={title} />
    </li>
  );
};

export default Book;
