import React from "react";
import "./search-box.styles.css";

export const SearchBox = ({ placeHolder, searchHandler }) => {
  return (
    <input
      className="search"
      type="search"
      placeholder={placeHolder}
      onChange={searchHandler}
    />
  );
};
