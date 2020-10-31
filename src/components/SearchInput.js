import React from "react";
import "../App.scss";

function SearchInput({ onSubmit }) {
  const [input, setInput] = React.useState("");
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Github 프로필을 검색해보세요"
        value={input}
        onChange={handleChange}
        ref={inputRef}
      />
    </form>
  );
}

export default SearchInput;
