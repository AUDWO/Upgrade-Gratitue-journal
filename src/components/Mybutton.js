const Mybutton = ({ text, type = "default", onClick }) => {
  const btnType = ["positive", "negative"].includes(type) ? type : "default";
  return (
    <button
      className={["Mybutton", `Mybutton_${btnType}`].join(" ")}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Mybutton;
