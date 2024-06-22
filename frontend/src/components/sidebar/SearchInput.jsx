import React from "react";
import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="search..."
        className="input placeholder-primary border-primary rounded-full bg-transparent focus:bg-gray-200 focus:placeholder-black "
      />
      <button type="submit" className="btn btn-circle bg-primary text-white">
         <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
