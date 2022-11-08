import "./input.css";

export const Input = ({ children, inputRef, ...otherProps }) => {
  return (
    <input
      className="input"
      type="text"
      placeholder={children}
      ref={inputRef}
      {...otherProps}
    />
  );
};
