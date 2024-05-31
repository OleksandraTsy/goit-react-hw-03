import { useId } from "react";
import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  const id = useId();
  return (
    <div className={css.box}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        id={id}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={css.input}
      ></input>
    </div>
  );
}