import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");

  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={styles.div}>
      <input
        className={styles.input}
        onChange={handleChange}
        value={id}
        type="search"
        placeholder="Add character..."
      />
      <button
        className={styles.btn}
        onClick={() => {
          onSearch(id);
          setId("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default SearchBar;
