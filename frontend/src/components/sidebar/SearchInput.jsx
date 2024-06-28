import React, { useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import usegetConversation from "../../hooks/usegetConversation";
import useConversation from "../../zustand/useConversation";
import toast from "react-hot-toast";

const SearchInput = () => {
  const { conversations } = usegetConversation();
  const { setSelectedConversation } = useConversation();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) {
      return;
    }

    const conversation = conversations.find((e) =>
      e.fullName.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No User Found");
    }
  };
  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="input placeholder-primary border-primary rounded-full bg-transparent focus:bg-gray-200 focus:placeholder-black "
      />
      <button type="submit" className="btn btn-circle bg-accent text-white">
        <IoSearchSharp className="w-6 h-6 outline-none" />
      </button>
    </form>
  );
};

export default SearchInput;
