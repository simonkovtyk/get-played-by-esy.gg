import Props from "./Types";
import iconProps from "./Utils";

const VolumeDown = (props: Props) => {
  return (
    <svg {...iconProps(props)} xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
      <path d="M200-360v-240h160l200-200v640L360-360H200Zm440 40v-322q45 21 72.5 65t27.5 97q0 53-27.5 96T640-320ZM480-606l-86 86H280v80h114l86 86v-252ZM380-480Z"/>
    </svg>
  );
};

export default VolumeDown;