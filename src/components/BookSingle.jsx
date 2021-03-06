import React, { useEffect, useState } from "react";

import Book from "./Book/Book";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BookSingle({ books }) {
  let { id } = useParams(); // recuperation de id dans l'url
  const [details, setDetails] = useState(null); // declaration de la variable details
  const [sameAuthor, setSameAuthor] = useState([]);

  useEffect(() => {
    setDetails(books.find(item => item.id === id));
  }, [books]);

  useEffect(() => {
    if (details) {
      setSameAuthor(
        books.filter(
          item => item.author === details.author && item.id !== details.id
        )
      );
    }
  }, [details]);

  const SameAuthorInstances = sameAuthor.map(item => {
    return (
      <Book
        key={item.id}
        title={item.title}
        author={item.author}
        cover={item.cover}
        description={item.description}
        id={item.id}
      />
    );
  });

  return details ? (
    <div className="mx-12">
      <div>
        <Link to="/" className="underline hover:no-underline">
          Return to list
        </Link>
      </div>

      <div className="mb-20">
        <h1 className="text-3xl mt-12 mb-2">{details.title}</h1>
        <h3 className="text-2xl mb-8"> {details.subtitle} </h3>

        <div className="rounded shadow-lg bg-slate-100 text-app-xs lg:text-app-l pt-4 p-4 flex flex-wrap justify-between mb-10 ">
          <span className="w-full lg:w-auto pb-4 lg:pb-0 text-center">
            {" "}
            By : {details.author}{" "}
          </span>
          <span className="w-full lg:w-auto  pb-4 lg:pb-0 text-center">
            {" "}
            ISBN : {details.isbn}{" "}
          </span>
          <span className="w-full lg:w-auto  pb-4 lg:pb-0 text-center">
            {" "}
            publisher : {details.publisher}{" "}
          </span>
        </div>

        <div className="flex flex-wrap justify-between items-center">
          <p className="w-full lg:w-1/2 leading-relaxed  pb-10 lg:pb-0 lg:pr-8 text-lg ">
            {" "}
            {details.description}{" "}
          </p>
          <div className="w-full lg:w-1/2">
            {details.cover && (
              <img src={details.cover} alt={details.title} className="m-auto" />
            )}
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl mb-8">By the same Author..</h1>
        {(() => {
          if (SameAuthorInstances[0]) {
            return (
              <ul className="flex flex-wrap gap-6 mx-12">
                {SameAuthorInstances}{" "}
              </ul>
            );
          } else {
            return <p className="italic pl-8"> No book at the moment </p>;
          }
        })()}
      </div>
    </div>
  ) : (
    <div className="italic"> chargement.. </div>
  );
}

export default BookSingle;
