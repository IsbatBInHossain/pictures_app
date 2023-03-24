import { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };
  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        value={term}
        onChange={handleChange}
        type="text"
        placeholder="Search Images"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <i className="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBar;
