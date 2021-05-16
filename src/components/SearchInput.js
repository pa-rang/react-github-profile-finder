import styled from "@emotion/styled";
import React from "react";

const Input = styled.input`
  background-color: #24272b;
  border-radius: 10px;
  border: none;
  color: #b6b7b8;
  font-family: inherit;
  font-size: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  width: 320px;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #b6b7b8;
  }
`;

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
      <Input
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
