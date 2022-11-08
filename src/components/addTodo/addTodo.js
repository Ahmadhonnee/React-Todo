import { useRef } from "react";
import { Button } from "../button/button";
import { Input } from "../input/input";
import { SectionTitle } from "../sectionTitle/sectionTitle";
import "./addTodo.css";

export const AddTodo = ({ list, setList }) => {
  const inputRef = useRef();
  const hendleAddBtn = (evt) => {
    evt.preventDefault();
    setList([
      ...list,
      {
        id: 1,
        name: inputRef.current.value,
        isChecked: false,
      },
    ]);
  };
  // console.log(inputRef.current.value);
  return (
    <div className="addTodo">
      <SectionTitle>Add Todo</SectionTitle>
      <form onSubmit={hendleAddBtn} className="addTodo__form">
        <Input inputRef={inputRef}>Something todo</Input>
        <Button>Add</Button>
      </form>
    </div>
  );
};
