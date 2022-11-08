import "./button.css";

const func = () => {
  console.log("Hi");
};

export const Button = ({ children, type = "submit", onClick }) => {
  return (
    <button onClick={func} type={type} className="button">
      {children}
    </button>
  );
};
