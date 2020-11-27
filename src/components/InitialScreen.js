import React from "react";
import { Link } from "react-router-dom";

export const InitialScreen = () => {
  return (
    <div className="w-100">
      <div className="text-center">
        <img
          className=""
          src="http://navent.com/es/wp-content/uploads/Navent-isologo.svg"
          alt="Navent logo"
        />
      </div>
      <Link to="/postings">
        <div className="text-center">
          <button className="btn btn-secondary">Ir al Challenge</button>
        </div>
      </Link>
      <br />
      <Link
        to={{ pathname: "https://github.com/simonchoxx?tab=repositories" }}
        target="_blank"
      >
        <div className="text-center">
          <button className="btn btn-info">Ir al Github</button>
        </div>
      </Link>
    </div>
  );
};
