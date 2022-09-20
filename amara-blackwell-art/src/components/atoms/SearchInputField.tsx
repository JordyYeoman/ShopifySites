import React from "react";
import Search from "../../assets/icons/Search.svg";

function SearchInputField() {
  return (
    <div className="flex flex-col self-center justify-center">
      <div className="search__container relative">
        <input
          className="search__input emberly-light tracking-widest font-bold uppercase letter-spacing"
          type="text"
          placeholder="Search Art"
        />
      </div>
    </div>
  );
}

export default SearchInputField;
