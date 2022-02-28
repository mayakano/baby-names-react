import React, { useEffect, useState, useRef } from "react";

export function Search() {
  const [searchValue, setSearchValue] = useState("");
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  function handleChange(event) {
    setSearchValue(event.target.value);
  }

  return (
    <header>
      <input
        ref={inputRef}
        type="text"
        placeholder="Type a name..."
        value={searchValue}
        onChange={handleChange}
      />
    </header>
  );
}
