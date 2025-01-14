import Props from "./Types";
import iconProps from "./Utils";

const Play = (props: Props) => {
  return (
    <svg {...iconProps(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M320-200v-560l440 280-440 280Zm80-280Zm0 134 210-134-210-134v268Z"/>
    </svg>
  );
};

export default Play;
