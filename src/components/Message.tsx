interface props {
  text: JSX.Element;
  isCopied: boolean
}
const Message = ({ text, isCopied }: props) => {
  return (
    <div id="Message"
      className={isCopied ? "show" : undefined}
    >
      {text}
    </div>
  );
};

export default Message;
